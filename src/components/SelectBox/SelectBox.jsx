import { useNavigate } from 'react-router-dom';
import { logout } from '../../apis/auth';
import { SelectBoxListContainer, SelectBoxListItem } from './style.js';

const OPTIONS_LOGGED_OUT = [
  { value: 'signUp', label: '회원가입', path: '/auth/signup' },
  { value: 'logIn', label: '로그인', path: '/auth/signin' }
];

const OPTIONS_LOGGED_IN = [
  { value: 'myPage', label: '마이페이지', path: '/mypage' },
  { value: 'logOut', label: '로그아웃', path: '/' }
];

function SelectBox({ onClose, user }) {
  const navigate = useNavigate();

  const handleSelect = (path) => {
    if (path === '/') {
      logout();
    } else {
      navigate(path);
      onClose();
    }
  };

  console.log(user);
  const options = user.id !== '' ? OPTIONS_LOGGED_IN : OPTIONS_LOGGED_OUT;

  return (
    <SelectBoxListContainer>
      {options.map((option) => (
        <SelectBoxListItem key={option.value} onClick={() => handleSelect(option.path)}>
          {option.label}
        </SelectBoxListItem>
      ))}
    </SelectBoxListContainer>
  );
}
export default SelectBox;
