import {HomeContainer, HomeTitle} from './style';
import { Category } from '../../components/Category/index.js';
import LayoutContainer from '../../components/Layout/LayoutContainer/index.js';
import ModalButton from '../../components/Button/ModalButton/index.js';
import Contents from '../../components/Contents/index.js';
import {useState} from "react";
import ModalLayout from "../../components/Modal/Modal.jsx";
import useModalScrollRock from "../../components/CustomHook/ModalScrollRock/index.jsx";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {lockScroll,openScroll} = useModalScrollRock();

  const openModal = () => {
    // eslint-disable-next-line react/jsx-key
    lockScroll();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    openScroll();
    setIsModalOpen(false);
  }
  return (
    <HomeContainer>
      <HomeTitle>카테고리</HomeTitle>
      <Category />
      <LayoutContainer>
        <Contents title={'K-Pop'} />
        <ModalButton onClick={openModal} />
      </LayoutContainer>
      {isModalOpen && <ModalLayout closeModal={closeModal} />}
    </HomeContainer>
  );
}

export default Home;
