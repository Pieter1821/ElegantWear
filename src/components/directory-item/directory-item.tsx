import { DirectoryItemContainer, Body, BackgroundImage } from './directory-item.styles';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../store/categories/category.types';
import { FC } from 'react';



type DirectoryItemProps = {
  category: Category;
}


const DirectoryItem: FC<DirectoryItemProps> = ({ category: { imageUrl, title, route } }) => {

  const navigate = useNavigate();

  const onNavigateHandler = () => {
    if (route) navigate(route);
  };


  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
