import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser, getCurrentUserID } from '../../apis/user';
import ModalButton from '../../components/Button/ModalButton/index.js';
import { Category } from '../../components/Category/index.js';
import Contents from '../../components/Contents/index.js';
import LayoutContainer from '../../components/Layout/LayoutContainer/index.js';
import ModalLayout from '../../components/Modal/Modal.jsx';
import useModalScrollRock from '../../hooks/ModalScrollRock/index.js';
import { initUser } from '../../redux/slices/userSlice';
import { HomeContainer, HomeTitle } from './style';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { lockScroll, openScroll } = useModalScrollRock();
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const dispatch = useDispatch();

  const openModal = () => {
    lockScroll();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    openScroll();
    setIsModalOpen(false);
  };

  useEffect(() => {
    //현재 로그인한 유저 정보 불러오기
    (async () => {
      const userId = await getCurrentUserID();
      const userData = await fetchUser(userId);
      const User = {
        id: userData.id,
        nickname: userData.nickname,
        profile_img: userData.profile_img,
        provider: userData.provider
      };
      dispatch(initUser(User));
    })();
  }, []);

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
