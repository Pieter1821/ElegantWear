import { Route, Routes } from 'react-router-dom';
import Navigation from './pages/navigation/navigation';
import Shop from './pages/shop/shop';
import Home from './pages/home/home';
import Authentication from './pages/authentication/authentication';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />'
      </Route>
    </Routes>
  );
};

export default App;
