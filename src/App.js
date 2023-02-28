import Home from "./components/routes/home/home.component";
import React from "react";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
