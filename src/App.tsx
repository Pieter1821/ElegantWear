import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';
import { Spinner } from './components/spinner/spinner';

const Home = lazy(() => import('./pages/home/home'))
const Authentication = lazy(() => import('./pages/authentication/authentication'))
const Shop = lazy(() => import('./pages/shop/shop'))
const Checkout = lazy(() => import('./pages/checkout/checkout'))
const Navigation = lazy(() => import('./pages/navigation/navigation'))



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);


  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
