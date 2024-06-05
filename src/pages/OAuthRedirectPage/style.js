import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loading = styled.div`
  border: 8px solid #ccecea;
  border-top: 8px solid #a0d2cf;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;

