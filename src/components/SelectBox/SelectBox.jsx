import {SelectBoxListContainer, SelectBoxListItem} from "./style.js";
import {useNavigate} from "react-router-dom";

const OPTIONS_LOGGED_OUT = [
  { value: 'signUp', label: '회원가입', path: '/auth/signup' },
  { value: 'logIn', label: '로그인', path: '/auth/signin' },
];

const OPTIONS_LOGGED_IN = [
  { value: 'myPage', label: '마이페이지', path: '/mypage' },
  { value: 'logOut', label: '로그아웃', path: '/' },
];

function SelectBox({ isLoggedIn, onClose, onLogout }) {
  const navigate = useNavigate();

  const handleSelect = (path) => {
    if (path === '/') {
      onLogout();
    } else {
      navigate(path);
      onClose();
    }
  }


  const options = isLoggedIn ? OPTIONS_LOGGED_IN : OPTIONS_LOGGED_OUT;

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