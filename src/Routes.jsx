import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Success from "./pages/Success";
import Profile from "./pages/Profile";
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Confirm from "./pages/Confirm"
import Orders from "./pages/Orders"
import ProductDetail from "./pages/ProductDetail"
import BtnEntrar from "./components/BtnEntrar/BtnEntrar";

function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Confirm" element={<Confirm />}></Route>
        <Route path="/Orders" element={<Orders />}></Route>
        <Route path="/ProductDetail" element={<ProductDetail />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Success" element={<Success />}></Route>
        <Route path="/BtnEntrar" element={<BtnEntrar />}></Route>
      </Routes>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes