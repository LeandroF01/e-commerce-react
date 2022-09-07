import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Routes/Home/Home";
import Login from "./components/Routes/Login/Login";
import { Purchases } from "./components/Routes/Purchases/Purchases";
import { ProductDetail } from "./components/Routes/ProductDetail/ProductDetail";
import { Header } from "./components/Shared/Header/Header";
import { SignUp } from "./components/Routes/SignUp/SignUp";
import { useEffect } from "react";
import { ShoppingCart } from "./components/Shared/Header/ShoppingCart/ShoppingCart";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes/ProtectedRoutes";
import User from "./components/Routes/User/User";
import RegisterUser from "./components/Routes/FormLogin/RegisterUser";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
