import { Outlet } from 'react-router-dom';
import CategoryMenu from '../../components/category-menu/category-menu';

function Home({ categories }) {
  return (
    <div>
      <Outlet />
      <CategoryMenu categories={categories} />
    </div>
  );
}

export default Home;
