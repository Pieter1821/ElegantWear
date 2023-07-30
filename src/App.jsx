import { Route, Routes } from 'react-router-dom';
import Navigation from './pages/navigation/navigation';
import Shop from './pages/shop/shop';
import Home from './pages/home/home';
import SignIn from './pages/sign-in/sign-in';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />'
      </Route>
    </Routes>
  );
};

export default App;
