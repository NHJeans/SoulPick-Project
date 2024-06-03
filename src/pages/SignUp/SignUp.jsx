import Join from '../../components/Auth/Join/Join';
import LoginLink from '../../components/Auth/LoginLink';
import { styled } from 'styled-components';

const SignUp = () => {
  return (
    <SignUpContainer>
      <Join />
      <LoginLink />
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 680px;
  height: 835px;
`;
