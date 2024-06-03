import { Container, StyledLink } from './style';

const JoinLink = () => {
  return (
    <Container>
      <StyledLink to="/auth/signup">계정이 없다면 회원가입을 하세요!!</StyledLink>
    </Container>
  );
};

export default JoinLink;
