import styled from 'styled-components';
import JoinLink from '../../components/Auth/JoinLink';
import Login from '../../components/Auth/Login';
import SocialLoginButton from '../../components/Button/SocialLoginButton';
import { googleLogin } from '../../apis/auth';

const SignIn = () => {
  const handleSocialLogin = async (provider) => {
    try {
      if (provider === 'google') {
        await googleLogin();
      } else {
        console.log(`Logging in with ${provider}`);
      }
    } catch (error) {
      console.error('Social login error:', error);
    }
  };

  return (
    <SignInContainer>
      <Login />
      <Divider>SNS 로그인</Divider>
      <SocialLoginButtons>
        <SocialLoginButton provider="google" onClick={() => handleSocialLogin('google')} />
        <SocialLoginButton provider="github" />
        <SocialLoginButton provider="kakao" />
      </SocialLoginButtons>
      <JoinLink />
    </SignInContainer>
  );
};

export default SignIn;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 680px;
  height: 835px;
`;
const SocialLoginButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-bottom: 20px;
`;
const Divider = styled.div`
  margin: 20px 0;
  font-size: 16px;
  color: #888;
`;
