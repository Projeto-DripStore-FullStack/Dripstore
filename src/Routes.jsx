import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Success from "./pages/Success";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart"
import Confirm from "./pages/Confirm"
import Orders from "./pages/Orders"
import ProductDetail from "./pages/ProductDetail"
import ProductList from "./pages/ProductList";
import Footer from "./components/Footer/Footer";
import MyInfo from "./pages/MyInfo";
import EditAccount from "./pages/EditAccount/EditAccount";
import CreateAccount from "./pages/CreateAccount";

function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Footer" element={<Footer />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Cart/getOne/:produtoId" element={<Cart />}></Route>
        <Route path="/Confirm" element={<Confirm />}></Route>
        <Route path="/Orders" element={<Orders />}></Route>
        <Route path="/ProductDetail" element={<ProductDetail />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/Success/getOne/:pedidoId" element={<Success />}></Route>
        <Route path="/ProductList" element={<ProductList/>}></Route>
        <Route path="/MyInfo" element={<MyInfo/>}></Route>
        <Route path="/EditAccount" element={<EditAccount/>}></Route>
        <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes