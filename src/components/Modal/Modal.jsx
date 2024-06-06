import { useState } from 'react';
import { useDispatch } from 'react-redux';
import supabase from '../../apis/supabaseClient.js';
import { createPost } from '../../redux/slices/postSlice';
import ModalSelectBox from './ModalSelectBox/index.js';
import {
  Container,
  ContentInner,
  ErrorMessage,
  ModalContainer,
  ModalContent,
  ModalContentWrapper,
  ModalForm,
  ModalInput,
  ModalSelectInputWrapper,
  ModalSubmitButton,
  ModalTextarea,
  ModalTitle,
  ModalTopInputWrapper,
  ScreenDim
} from './style.js';

function ModalLayout({ closeModal }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    content: '',
    category: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = '제목을 입력해주세요.';
    if (!formData.link) newErrors.link = '링크를 입력해주세요.';
    if (!formData.content) newErrors.content = '내용을 입력해주세요.';
    if (!formData.category) newErrors.category = '카테고리를 선택해주세요.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    dispatch(createPost(formData));
    const { data, error } = await supabase.from('Posts').insert([{ ...formData }]);

    if (error) {
      console.error('데이터 삽입 오류,,,ㅠㅠ:', error);
    } else {
      console.log('데이터가 성공적으로 입력완!!!', data);
      setFormData({ title: '', link: '', content: '', category: '' });
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
                <ModalSelectInputWrapper>
                  <ModalSelectBox
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    error={errors.category}
                  />
                  <ModalTopInputWrapper>
                    <ModalInput
                      type="text"
                      placeholder="제목을 입력해주세요."
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                    {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
                  </ModalTopInputWrapper>
                </ModalSelectInputWrapper>
                <ModalInput
                  type="text"
                  placeholder="링크를 입력해주세요."
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                />
                {errors.link && <ErrorMessage>{errors.link}</ErrorMessage>}
                <ModalTextarea
                  type="text"
                  placeholder="내용을 입력해주세요."
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                />
                {errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}

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
