import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />
 <Route
          path="/about"
          element={<About />}
        />
      </Routes>

    </BrowserRouter>
  );
};

export default App;