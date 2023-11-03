import DirectoryItem from '../directory-item/directory-item';
import './category-menu.scss';

const CategoryMenu = ({ categories }) => {
  return (
    <div className="category-menu-container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoryMenu;
