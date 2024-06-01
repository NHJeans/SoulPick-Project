import {HomeContainer} from "./style";
import { Category } from "../../components/Category/index.js";
import LayoutContainer from "../../components/Layout/LayoutContainer/index.js";
import {useModal} from "../../components/Modal/ModalProvider/ModalProvider.jsx";
import ModalButton from "../../components/ModalButton/index.js";
import ContentsList from "../../components/Contents/components/ContentsList/index.js";
import Contents from "../../components/Contents/index.js";

function Home() {
  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal();
  };

  return (
    <HomeContainer>
      <Category/>
      <LayoutContainer>
        <Contents />
        <ModalButton onClick={handleOpenModal}/>
      </LayoutContainer>
    </HomeContainer>
  );
}

export default Home;

