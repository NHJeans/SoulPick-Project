import {
  Container,
  ContentInner,
  ModalContainer,
  ModalContent,
  ModalContentWrapper, ModalForm, ModalInput, ModalSubmitButton, ModalTextarea,
  ModalTitle,
  ScreenDim
} from "./style.js";


function ModalLayout({closeModal }){
  // const { closeModal } = useModal();

  return (
    <Container>
      <ModalContainer>
        <ModalContentWrapper>
          <ModalContent>
            <ContentInner>
              <ModalTitle>my Pick!</ModalTitle>
              <ModalForm>
                <ModalInput type="text" placeholder="제목을 입력해주세요." />
                <ModalInput type="text" placeholder="링크를 입력해주세요." />
                <ModalTextarea type="text" placeholder="내용을 입력해주세요." />
                <ModalSubmitButton type={'submit'}>등록하기</ModalSubmitButton>
              </ModalForm>
            </ContentInner>
          </ModalContent>
        </ModalContentWrapper>
        <ScreenDim onClick={closeModal} />
      </ModalContainer>
    </Container>
  )
}
export default ModalLayout;

