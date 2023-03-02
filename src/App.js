import Home from "./components/routes/home/home.component";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Fragment } from "react";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
