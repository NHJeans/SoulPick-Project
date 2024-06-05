import {
  Container,
  ContentInner,
  ModalContainer,
  ModalContent,
  ModalContentWrapper, ModalForm, ModalInput, ModalSubmitButton, ModalTextarea,
  ModalTitle,
  ScreenDim
} from "./style.js";
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import supabase from "../../apis/supabaseClient.js";

function ModalLayout({ closeModal }) {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('Posts')
      .insert([{ title, link, content, category: 'ost'}]);

    if (error) {
      console.error('데이터 삽입 오류,,,ㅠㅠ:', error);
    } else {
      console.log('데이터가 성공적으로 입력완!!!', data);
      setTitle('');
      setLink('');
      setContent('');
      closeModal();
    }
  };

  return (
    <Container>
      <ModalContainer>
        <ModalContentWrapper>
          <ModalContent>
            <ContentInner>
              <ModalTitle>my Pick!</ModalTitle>
              <ModalForm onSubmit={handleSubmit}>
                <ModalInput
                  type="text"
                  placeholder="제목을 입력해주세요."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <ModalInput
                  type="text"
                  placeholder="링크를 입력해주세요."
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <ModalTextarea
                  type="text"
                  placeholder="내용을 입력해주세요."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <ModalSubmitButton type="submit">등록하기</ModalSubmitButton>
              </ModalForm>
            </ContentInner>
          </ModalContent>
        </ModalContentWrapper>
        <ScreenDim onClick={closeModal} />
      </ModalContainer>
    </Container>
  );
}

export default ModalLayout;
