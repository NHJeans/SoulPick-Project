import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSupabaseData } from '../../apis/post.js';
import { initPost } from '../../redux/slices/postSlice';
import ContentList from './ContentList/index.js';
import { ContentTitle, ContentsContainer, DefaultContents } from './style.js';

function Contents({ title }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.postState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSupabaseData();
        dispatch(initPost(data));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, []);

  const filteredData = title === '전체' ? posts : posts.filter((item) => item.category === title);

  return (
    <ContentsContainer>
      <ContentTitle>{title}</ContentTitle>
      {filteredData.length > 0 ? (
        <ContentList data={filteredData} />
      ) : (
        title !== '전체' && (
          <DefaultContents>
            <p>해당 카테고리에 게시글이 없습니다.</p>
          </DefaultContents>
        )
      )}
    </ContentsContainer>
  );
}
export default Contents;
