import {
  CategoryCardBack,
  CategoryCardFront,
  CategoryItem,
  CategoryItemContainer, CategoryItemName,
  CategoryItemWrapper
} from "./style.js";
import usePostsData from "../../../hooks/Data/index.js";
import {getYoutubeThumbnail} from "../../../utils/youTube.js";
import categories from "../../../constansts/categories.js";

function CategoryItemList({onSelectCategory}){
  const {data, error} = usePostsData();
  if (error) {
    console.log('@@ error=>', error);
  }

  // 카테고리 별로 선택
  // const categories = [...new Set(data.map(item => item.category))];

  const categoryThumbnails = categories.map(category => {
    if (category.name === '전체') {
      return category.defaultImage;
    }
    const item = data.find(d => d.category === category.name);
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
            <CategoryCardBack>{category.defaultTitle}</CategoryCardBack>
          </CategoryItem>
          <CategoryItemName>{category.name}</CategoryItemName>
        </CategoryItemWrapper>
      ))}
    </CategoryItemContainer>
    );
}
export default CategoryItemList;