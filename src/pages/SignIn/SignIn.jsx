import { githubLogin, googleLogin, kakaoLogin } from '../../apis/auth';
import JoinLink from '../../components/Auth/JoinLink';
import Login from '../../components/Auth/Login';
import SocialLoginButton from '../../components/Button/SocialLoginButton';
import { Divider, SignInContainer, SocialLoginButtons } from './style';

const SignIn = () => {
  const handleSocialLogin = async (provider) => {
    try {
      if (provider === 'google') {
        await googleLogin();
      } else {
        console.log(`Logging ${provider}`);
      }
      if (provider === 'github') {
        await githubLogin();
      } else {
        console.log(`Logging ${provider}`);
      }
      if (provider === 'kakao') {
        await kakaoLogin();
      } else {
        console.log(`Logging ${provider}`);
      }
    } catch (error) {
      console.error('소셜로그인 :', error);
    }
  };

  return (
    <SignInContainer>
      <Login />
      <Divider>SNS 로그인</Divider>
      <SocialLoginButtons>
        <SocialLoginButton provider="google" onClick={() => handleSocialLogin('google')} />
        <SocialLoginButton provider="github" onClick={() => handleSocialLogin('github')} />
        <SocialLoginButton provider="kakao" onClick={() => handleSocialLogin('kakao')} />
      </SocialLoginButtons>
      <JoinLink />
    </SignInContainer>
  );
};

export default SignIn;
