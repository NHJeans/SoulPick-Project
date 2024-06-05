import {CategoryCardBack, CategoryCardFront, CategoryItem, CategoryItemContainer} from "./style.js";
import usePostsData from "../../../hooks/Data/index.js";

function CategoryItemList({onSelectCategory}){
  const {data, error} = usePostsData();
  if (error) {
    console.log('@@ error=>', error);
  }

  // 카테고리 별로 선택
  const categories = [...new Set(data.map(item => item.category))];

  return (
    <CategoryItemContainer>
      {categories.map((category) => (
        <CategoryItem key={category} onClick={() => onSelectCategory(category)}>
          <CategoryCardFront />
          <CategoryCardBack>{category}</CategoryCardBack>
        </CategoryItem>
      ))}
    </CategoryItemContainer>
    );
}
export default CategoryItemList;