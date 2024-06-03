import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthError, signUp } from '../../../apis/auth';
import {
  InputWrapper,
  Container,
  StyledLink,
  Title,
  Label,
  Input,
  ErrorMessage,
  SuccessMessage,
  Button
} from './style';

const Join = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      setError('비밀번호를 다시 확인해 주세요.');
      return;
    }
    setError('');
    try {
      const result = await signUp({ email, password });
      if (result) {
        console.log('회원가입 성공!');
        setSuccessMessage('회원가입이 완료되었습니다. 이메일을 확인해주세요.');
        setTimeout(() => {
          navigate('/auth/signin');
        }, 3000);
      }
    } catch (error) {
      if (error instanceof AuthError) {
        setError(error.message);
      } else {
        setError('예기치 않은 오류가 발생했습니다.');
      }
    }
  };

  return (
    <Container onSubmit={handleSignUp}>
      <StyledLink to="/">
        <Title>SoulPick</Title>
      </StyledLink>
      <InputWrapper>
        <Label>이메일:</Label>
        <Input
          type="email"
          value={email}
          placeholder="example@sample.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>비밀번호:</Label>
        <Input
          type="password"
          value={password}
          placeholder="최소 6자리 이상 입력하세요."
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>비밀번호 확인:</Label>
        <Input
          type="password"
          value={passwordCheck}
          placeholder="비밀번호 재입력"
          onChange={(e) => setPasswordCheck(e.target.value)}
          required
        />
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      <Button type="submit">회원가입</Button>
    </Container>
  );
};

export default Join;
