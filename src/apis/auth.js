import supabase from './supabaseClient';
import { generateRandomNickname } from '../utils/generateRandomNickname'


export class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthError"; // 에러 이름 설정
  }
}

// 로그인 기능
export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    if (error.message === 'Email not confirmed') {
      throw new AuthError("이메일을 인증을 완료하지 않았습니다.");
    }
    throw new AuthError("로그인 정보가 잘못되었습니다.");
  }
  return data;
};

// 사용자 정보 확인 함수
export const checkUserExists = async (userId) => {
  const { data, error } = await supabase
    .from('Users')
    .select('id')
    .eq('id', userId)
    .single();

  if (error && error.details !== '0 rows') {
    throw new AuthError('사용자 정보를 확인하는 데 실패했습니다: ' + error.message);
  }

  return data;
};

// 사용자 정보 저장
export const insertUser = async (userId, nickname) => {
  const { error } = await supabase.from('Users').insert({
    id: userId,
    nickname: nickname || generateRandomNickname(),
    profile_img: '',
  });

  if (error) {
    throw new AuthError('사용자 정보를 저장하는 데 실패했습니다: ' + error.message);
  }
};
// 회원가입 기능
export const signUp = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    throw new AuthError("회원가입에 실패했습니다: " + error.message);
  }
  const userId = data.user.id;
  const existingUser = await checkUserExists(userId);

  if (!existingUser) {
    await insertUser(userId);
  }

  return data;
};


// 구글 로그인 및 회원가입 기능
export const googleLogin = async () => {
  console.log('Attempting to log in with Google');
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { queryParams: { access_type: "offline", prompt: "consent" } }
  });
  if (error) {
    console.error('Error during Google login:', error);
    throw new AuthError("로그인 정보가 잘못되었습니다.");
  }
};

//Todo 미구현
// 로그아웃 기능
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new AuthError("로그아웃에 실패하였습니다.");
  }
};