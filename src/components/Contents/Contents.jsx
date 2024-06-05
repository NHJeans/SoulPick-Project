import {ContentsContainer, ContentTitle} from "./style.js";
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
      <ContentList data={filteredData} />
    </ContentsContainer>
  );
}
export default Contents;