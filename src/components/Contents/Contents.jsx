import {ContentsContainer, ContentTitle, DefaultContents} from "./style.js";
import ContentList from "./ContentList/index.js";
import {fetchSupabaseData} from "../../apis/post.js";
import {useEffect, useState} from "react";

function Contents({title}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSupabaseData();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchData();
  }, []);


  const filteredData = title === "전체" ? posts : posts.filter(item => item.category === title)

  return (
    <ContentsContainer>
      <ContentTitle>{title}</ContentTitle>
      {filteredData.length > 0 ? (
        <ContentList data={filteredData} />
      ) : (
        title !== "전체" && (
          <DefaultContents>
            <p>해당 카테고리에 게시글이 없습니다.</p>
          </DefaultContents>
        )
      )}
    </ContentsContainer>

  );
}
export default Contents;