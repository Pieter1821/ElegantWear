import { Route, Routes } from 'react-router-dom';
import Navigation from './pages/navigation/navigation';
import Shop from './pages/shop/shop';
import Home from './pages/home/home';
import Authentication from './pages/authentication/authentication';
import Checkout from './pages/checkout/checkout';
import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    // Cleanup function to unsubscribe when the component is unmounted
    return () => unsubscribe();
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
