import { generateRandomNickname } from '../utils/generateRandomNickname';
import supabase from './supabaseClient';

export class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthError'; // 에러 이름 설정
  }
}

// 로그인 기능
export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    if (error.message === 'Email not confirmed') {
      throw new AuthError('이메일을 인증을 완료하지 않았습니다.');
    }
    throw new AuthError('로그인 정보가 잘못되었습니다.');
  }
  return data;
};

// 사용자 정보 확인
export const checkUserExists = async (userId) => {
  const { data, error } = await supabase.from('Users').select('id').eq('id', userId).single();

  if (error && error.code !== 'PGRST116') {
    throw new AuthError('사용자 정보를 확인하는 데 실패했습니다');
  }

  return data;
};

// 사용자 정보 저장
export const insertUser = async (userId, nickname, email, provider, profileImg) => {
  const { error } = await supabase.from('Users').insert({
    id: userId,
    nickname: nickname || generateRandomNickname(),
    email,
    provider,
    profile_img: profileImg || ''
  });

  if (error) {
    throw new AuthError('사용자 정보를 저장하는 데 실패했습니다.');
  }
};

// 회원가입 기능
export const signUp = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    throw new AuthError('이미 존재하는 이메일 입니다.');
  }
  const userId = data.user.id;
  const existingUser = await checkUserExists(userId);

  if (!existingUser) {
    await insertUser(userId, generateRandomNickname(), email, 'email', '');
  }

  return data;
};

// OAuth 로그인 및 회원가입
const oauthLogin = async (provider, options) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options
  });

  if (error) {
    throw new Error(`${provider} 로그인 중 오류가 발생했습니다`);
  }
  if (data.url) {
    window.location.href = data.url;
  }

  return data;
};

// 구글 로그인 및 회원가입
export const googleLogin = async () => {
  await oauthLogin('google', { redirectTo: import.meta.env.VITE_OAUTH_REDIRECT_URL });
};

// 깃헙 로그인 및 회원가입
export const githubLogin = async () => {
  await oauthLogin('github', { redirectTo: import.meta.env.VITE_OAUTH_REDIRECT_URL });
};

// 카카오 로그인 및 회원가입
export const kakaoLogin = async () => {
  await oauthLogin('kakao', { redirectTo: import.meta.env.VITE_OAUTH_REDIRECT_URL });
};

// 사용자 정보 추출
const extractUserInfo = (user) => {
  const provider = user.app_metadata.provider;
  let nickname = generateRandomNickname();
  const profileImg = user.user_metadata.avatar_url || '';

  switch (provider) {
    case 'google':
      nickname = user.user_metadata.full_name || nickname;
      break;
    case 'github':
      nickname = user.user_metadata.user_name || nickname;
      break;
    case 'kakao':
      nickname = user.user_metadata.full_name || nickname;
      break;
    default:
      break;
  }

  return { nickname, profileImg, provider };
};

// 리다이렉션 후 사용자 정보 업데이트
export const updateUserAfterOAuth = async () => {
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
  if (sessionError) {
    throw new Error('세션 정보를 가져오는 데 실패했습니다.');
  }

  const user = sessionData.session.user;

  if (!user) {
    throw new Error('사용자 정보가 없습니다.');
  }

  const userId = user.id;
  const existingUser = await checkUserExists(userId);

  if (!existingUser) {
    const { nickname, profileImg, provider } = extractUserInfo(user);
    await insertUser(userId, nickname, user.email, provider, profileImg);
  }
};

// 로그아웃 기능
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new AuthError('로그아웃에 실패하였습니다.');
  }
};
