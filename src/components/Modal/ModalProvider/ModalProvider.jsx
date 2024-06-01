import { createContext, useContext, useState } from 'react';
import ModalLayout from '../Modal.jsx';

// 모달을 관리할 컨텍스트를 생성
export const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {}
});

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const openModal = () => {
    // eslint-disable-next-line react/jsx-key
    setModals(prev => [...prev, <ModalLayout/>]);
  };

  const closeModal = () => {
    setModals(prev => prev.slice(0, -1)); // 마지막 모달을 제거
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modals.map((modal, index) => (
        <ModalLayout key={index}>{modal}</ModalLayout>
      ))}
    </ModalContext.Provider>
  );
};

// 모달 기능을 사용하기 위한 커스텀 훅
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
