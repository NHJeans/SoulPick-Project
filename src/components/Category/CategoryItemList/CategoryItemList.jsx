import {
  CategoryCardBack,
  CategoryCardFront,
  CategoryItem,
  CategoryItemContainer, CategoryItemName,
  CategoryItemWrapper
} from "./style.js";
import {getYoutubeThumbnail} from "../../../utils/youTube.js";
import categories from "../../../constansts/categories.js";
import {fetchSupabaseData} from "../../../apis/post.js";
import {useEffect, useState} from "react";

function CategoryItemList({onSelectCategory}){
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


  // 카테고리 별로 선택된 포스트의 썸네일을 가져옴
  const categoryThumbnails = categories.map(category => {
    if (category.name === '전체') {
      return category.defaultImage;
    }
    const item = posts.find(d => d.category === category.name);
    return item ? getYoutubeThumbnail(item.link) : category.defaultImage;
  });


  return (
    <CategoryItemContainer>
      {categories.map((category, index) => (
        <CategoryItemWrapper key={category.name}  onClick={() => onSelectCategory(category.name)}>
          <CategoryItem>
            <CategoryCardFront>
              <img src={categoryThumbnails[index]} alt={`${category.name}`} />
            </CategoryCardFront>
            <CategoryCardBack>
              <img src={categoryThumbnails[index]} alt={`${category.name} Back`} />
              <div>{category.name}</div>
            </CategoryCardBack>
          </CategoryItem>
          <CategoryItemName>{category.name}</CategoryItemName>
        </CategoryItemWrapper>
      ))}
    </CategoryItemContainer>
    );
}
export default CategoryItemList;