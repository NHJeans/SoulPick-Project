import { CategoryContainer } from './style.js';
import CategoryItemList from './CategoryItemList/index.js';

function Category({onSelectCategory}) {

  return (
    <CategoryContainer>
      <CategoryItemList onSelectCategory={onSelectCategory} />
    </CategoryContainer>
  );
}
export default Category;
