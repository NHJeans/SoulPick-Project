import { StyledLink, Container } from './style';

const LoginLink = () => {
  return (
    <Container>
      <StyledLink to="/auth/signin">이미 계정이 있으신가요? 로그인 하세요!</StyledLink>
    </Container>
  );
};

export default LoginLink;
