import {HomeContainer, HomeTitle} from './style';
import { Category } from '../../components/Category/index.js';
import LayoutContainer from '../../components/Layout/LayoutContainer/index.js';
import ModalButton from '../../components/Button/ModalButton/index.js';
import Contents from '../../components/Contents/index.js';
import {useState} from "react";
import ModalLayout from "../../components/Modal/Modal.jsx";
import useModalScrollRock from "../../hooks/ModalScrollRock/index.js";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {lockScroll,openScroll} = useModalScrollRock();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = () => {
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
      <Category onSelectCategory={setSelectedCategory} />
      <LayoutContainer>
        <Contents title={selectedCategory} />
        <ModalButton onClick={openModal} />
      </LayoutContainer>
      {isModalOpen && <ModalLayout closeModal={closeModal} />}
    </HomeContainer>
  );
}

export default Home;
