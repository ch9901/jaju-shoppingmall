import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navigation";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import styled from "styled-components";
import { useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";

const Inner = styled.div`
  padding: 20px 100px;
  margin-top: 30px;
`;

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Inner>
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route
            path="/login"
            element={<Login setAuthenticate={setAuthenticate} />}
          />
          <Route
            path="/product/kitchenware/:id"
            element={<PrivateRoute authenticate={authenticate} />}
          />
          <Route
            path="/product/fashion/:id"
            element={<PrivateRoute authenticate={authenticate} />}
          />
          <Route
            path="/product/snack/:id"
            element={<PrivateRoute authenticate={authenticate} />}
          />
        </Routes>
      </Inner>
    </div>
  );
}

export default App;
