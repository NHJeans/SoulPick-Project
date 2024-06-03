import supabase from './supabaseClient';

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

const printErrorMessage = (message) => {
  switch (message) {
    case "Signup requires a valid password":
      return "비밀번호가 잘못되었습니다.";
    case "To signup, please provide your interest":
      return "이메일이 잘못되었습니다.";
    default:
      return "회원가입이 실패하였습니다.";
  }
};

// 회원가입 기능
export const signUp = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    throw new AuthError(printErrorMessage(error.message));
  }
  return data;
};

// 구글 로그인 및 회원가입 기능
export const googleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { queryParams: { access_type: "offline", prompt: "consent" } }
  });

  if (error?.status) throw new AuthError("로그인 정보가 잘못되었습니다.");
};

//Todo 미구현
// 로그아웃 기능
export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error?.status) throw new AuthError("로그아웃에 실패하였습니다.");
};