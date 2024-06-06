import Join from '../../components/Auth/Join/Join';
import LoginLink from '../../components/Auth/LoginLink';
import { SignUpContainer } from './style';

const SignUp = () => {
  return (
    <SignUpContainer>
      <Join />
      <LoginLink />
    </SignUpContainer>
  );
};

export default SignUp;
