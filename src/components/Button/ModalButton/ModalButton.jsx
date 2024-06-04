import Icon from "../../Icon/index.js";
import {ModalButtonContainer} from "./style.js";

function ModalButton({onClick}) {
  return (
    <ModalButtonContainer onClick={onClick}>
      <Icon name={'plus'} />
    </ModalButtonContainer>
  );
}
export default ModalButton;