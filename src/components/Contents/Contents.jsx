import {ContentsContainer, ContentTitle, DefaultContents} from "./style.js";
import ContentList from "./components/ContentList/index.js";
import usePostsData from "../../hooks/Data/index.js";

function Contents({title}) {
  const { data, error } = usePostsData();

  if (error) {
    return <div>Error loading posts.</div>;
  }

  const filteredData = title ? data.filter(item => item.category === title) : data;

  return (
    <ContentsContainer>
      <ContentTitle>{title || "추천합니다"}</ContentTitle>
      {/*<ContentList data={filteredData} />*/}
      {filteredData.length > 0 ? (
        <ContentList data={filteredData} />
      ) : (
        <DefaultContents>
          <p>해당 카테고리에 게시글이 없습니다.</p>
        </DefaultContents>
      )}
    </ContentsContainer>

  );
}
export default Contents;