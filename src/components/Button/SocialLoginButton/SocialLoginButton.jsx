import { styled } from 'styled-components';

const SocialLoginButton = () => {
  return (
    <div>
      <SocialButton>
        <img src="/google-logo.png" alt="Google" />
        <span>Login with Google</span>
      </SocialButton>
      <SocialButton style={{ backgroundColor: '#24292e', color: 'white' }}>
        <img src="/google-logo.png" alt="GitHub" />
        <span>Login with GitHub</span>
      </SocialButton>
    </div>
  );
};

export default SocialLoginButton;

const SocialButton = styled.button`
  cursor: pointer;
  background-color: white;
  color: #444;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
  }

  img {
    margin-right: 10px;
    width: 20px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }
`;
