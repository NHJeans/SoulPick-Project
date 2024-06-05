import {CategoryCardBack, CategoryCardFront, CategoryItem, CategoryItemContainer} from "./style.js";

function CategoryItemList() {
  return (
        <CategoryItemContainer>
          <CategoryItem>
            <CategoryCardFront />
            <CategoryCardBack />
          </CategoryItem>
          <CategoryItem>리</CategoryItem>
          <CategoryItem>조</CategoryItem>
          <CategoryItem>퐈</CategoryItem>
          <CategoryItem>이</CategoryItem>
          <CategoryItem>텡</CategoryItem>
          <CategoryItem>!!!</CategoryItem>
        </CategoryItemContainer>
    );
}
export default CategoryItemList;