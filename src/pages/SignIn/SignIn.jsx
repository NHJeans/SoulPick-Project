import styled from 'styled-components';
import Login from '../../components/Auth/Login/Login';
import SocialLoginButton from '../../components/Button/SocialLoginButton/SocialLoginButton';

const SignIn = () => {
  return (
    <SignInContainer>
      <Login />
      <SocialLoginButton />
    </SignInContainer>
  );
};

export default SignIn;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bakcground-color: #eee;
  width: 500px;
  height: 500px;
`;
