import {SelectBoxListContainer, SelectBoxListItem} from "./style.js";
import {useNavigate} from "react-router-dom";

const OPTIONS = [
  { value: 'signUp', label: '회원가입', path: '/auth/signup'},
  { value: 'logIn', label: '로그인' , path: '/auth/signin'},
  { value: 'myPage', label: '마이페이지', path: '/mypage' },
  { value: 'logOut', label: '로그아웃' , path: '/'},
];
function SelectBox({onClose}) {
    const navigagte = useNavigate();

  const handleSelect = (path) => {
    navigagte(path);
    onClose();
  };

  return (
    <SelectBoxListContainer>
      {OPTIONS.map((option) => (
        <SelectBoxListItem key={option.value} onClick={() => handleSelect(option.path)}>
          {option.label}
        </SelectBoxListItem>
      ))}
    </SelectBoxListContainer>
  );
}
export default SelectBox;