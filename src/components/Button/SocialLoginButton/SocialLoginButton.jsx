import Icon from '../../Icon';
import { Button } from './style';

const SocialLoginButton = ({ provider, onClick }) => {
  const getProviderName = (provider) => {
    switch (provider) {
      case 'google':
        return 'Google';
      case 'github':
        return 'github';
      case 'kakao':
        return 'kakao';
      default:
        return '';
    }
  };
  return (
    <Button onClick={onClick}>
      <Icon name={provider} alt={getProviderName(provider)} />
    </Button>
  );
};

export default SocialLoginButton;
