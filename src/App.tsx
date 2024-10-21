import React from "react";
import "./scss/sneaker.scss";
import HeaderLayout from "./layouts/HeaderLayout";

import Home from "./pages/Home";
import Cart from "./components/Cart";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Liked from "./pages/Liked";
import NotFoundBlock from "./pages/NotFoundBlock";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import FullSneakers from "./components/FullSneakers/FullSneakers";
import { regulationDrawerSelector } from "./redux/slices/regulationSlice";

const App: React.FC = () => {
  const drawer = useSelector(regulationDrawerSelector);
  return (
    <>
      {drawer && <Cart />}
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route path="" element={<Home />} />
          <Route path="Men" element={<Men />} />
          <Route path="Women" element={<Women />} />
          <Route path="Sneakers/:id" element={<FullSneakers />} />
          <Route path="Liked" element={<Liked />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<NotFoundBlock />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
