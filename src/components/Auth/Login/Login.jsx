import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthError, login } from '../../../apis/auth';
import { InputWrapper, Container, Title, StyledLink, Label, Input, ErrorMessage, Button } from './style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await login({ email, password });
      //todo 토큰정보 보기용
      console.log('로그인 성공!', result);
      navigate('/');
    } catch (error) {
      if (error instanceof AuthError) {
        setError(error.message);
      } else {
        setError('예기치 않은 오류가 발생했습니다.');
      }
    }
  };
  return (
    <Container onSubmit={handleLogin}>
      <StyledLink to="/">
        <Title>SoulPick</Title>
      </StyledLink>
      <InputWrapper>
        <Label>이메일</Label>
        <Input
          type="email"
          value={email}
          placeholder="example@sample.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>비밀번호</Label>
        <Input
          type="password"
          value={password}
          placeholder="최소 6자리 이상 입력하세요."
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {error === '이메일을 인증을 완료하지 않았습니다. 이메일을 확인해주세요.'}

      <Button type="submit">로그인</Button>
    </Container>
  );
};

export default Login;
