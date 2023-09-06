
import CategoryItem from '../category-item/category-item';
import './category-menu.scss';

const CategoryMenu = ({ categories }) => {
  return (
    <div className="category-menu-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoryMenu;
