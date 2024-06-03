import { IconStyled } from './style.js';
import IconLogo from "./components/Icons/IconLogo.jsx";
import {IconProfile} from "./components/Icons/IconProfile.jsx";
import {IconEdit} from "./components/Icons/IconEdit.jsx";
import {IconComment} from "./components/Icons/IconComment.jsx";
import {IconGoogle} from "./components/Icons/IconGoogle.jsx";
import {IconNaver} from "./components/Icons/IconNaver.jsx";
import {IconKakao} from "./components/Icons/IconKakao.jsx";
import {IconPlus} from "./components/Icons/IconPlus.jsx";
import {IconGithub} from "./components/Icons/IconGithub.jsx";

function Icon({ name, size = 22, color, ...props }) {
  const parseIcon = (name) => {
    switch (name) {
      case 'logo': {
        return <IconLogo />;
      }
      case 'profile': {
        return <IconProfile />;
      }
      case 'edit': {
        return <IconEdit />;
      }
      case 'comment': {
        return <IconComment />;
      }
      case 'google': {
        return <IconGoogle />;
      }
      case 'naver': {
        return <IconNaver />;
      }
      case 'kakao': {
        return <IconKakao />;
      }
      case 'plus': {
        return <IconPlus />;
      }
      case 'github' : {
        return <IconGithub />
      }
      default: {
        return null;
      }
    }
  };
  return (
    <IconStyled size={size} color={color} {...props}>
      {parseIcon(name)}
    </IconStyled>
  );
}
export default Icon;
