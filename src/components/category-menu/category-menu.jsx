import DirectoryItem from '../directory-item/directory-item';
import {CategoryMenuContainer} from './category-menu.styles';

const CategoryMenu = ({ categories }) => {
  return (
    <CategoryMenuContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </CategoryMenuContainer>
  );
};

export default CategoryMenu;
