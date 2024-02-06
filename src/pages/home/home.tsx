import { Outlet } from 'react-router-dom';
import CategoryMenu from '../../components/category-menu/category-menu';
import {FC} from 'react';


type Category = {
  id: number;
  title: string;
  imageUrl: string;
};

type CategoryProps = {
  categories: Category[];
};

const Home: FC<CategoryProps> = ({ categories }) => {
  return (
    <div>
      <Outlet />
      <CategoryMenu categories={categories} />
    </div>
  );
};

export default Home;



