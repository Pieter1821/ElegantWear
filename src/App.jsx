import { Route, Routes ,Outlet } from "react-router-dom";
import Home from "./pages/home/home";

const Navigation = () => {
  return (
    <div>
      <div>
      <h1>i am the Navigation bar</h1>
      </div>
      <Outlet />
    </div>
  )
}

const Shop = () => {
  return (
    <div>
      <h1>Elegant Wear</h1>
    </div>
  );

}



 const App = () => {
  return (
    <Routes>

      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      

      </Route>
    </Routes>
  );
}



export default App;
