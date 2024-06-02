import Icon from "../Icon/index.js";
import {ModalButtonContainer} from "./style.js";

function ModalButton() {
  return (
    <ModalButtonContainer>
      <Icon name={'plus'} size={60}></Icon>
    </ModalButtonContainer>
  );
}
export default ModalButton;