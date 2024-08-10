// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Terms from "./Terms";
import Solutions from "./Solutions";
import Products from "./Products";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/zyre_web" element={<Body />} />
          <Route path="/zyre_web/terms" element={<Terms />}></Route>
          <Route path="/zyre_web/solutions" element={<Solutions />} />
          <Route path="/zyre_web/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
