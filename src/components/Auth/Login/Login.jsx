import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Login = () => {
  return (
    <Container>
      {' '}
      <h3>SoulPick</h3>
      <form>
        <div>
          <label>이메일:</label>
          <input type="email" placeholder="example@sample.com" required />
        </div>
        <div>
          <label>비밀번호:</label>
          <input type="password" placeholder="최소 6자리 이상 입력하세요." required />
        </div>
        <button type="submit">로그인</button>
        <div>
          <Link to="/auth/signup">계정이 없다면 회원가입을 하세요!!</Link>
        </div>
      </form>
    </Container>
  );
};

export default Login;

const Container = styled.form`
  box-sizing: border-box;
`;
