import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navigation";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import styled from "styled-components";
import { useEffect, useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import Kitchenware from "./pages/Kitchenware";
import Fashion from "./pages/Fashion";
import Snack from "./pages/Snack";

const Inner = styled.div`
  padding: 20px 100px;
  margin-top: 30px;
`;

function App() {
  const [authenticate, setAuthenticate] = useState(false);


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
          <Route path="/products/kitchenware" element={<Kitchenware />} />
          <Route
            path="/products/kitchenware/:id"
            element={<PrivateRoute authenticate={authenticate} />}
          />
          <Route path="/products/fashion" element={<Fashion />} />
          <Route
            path="/products/fashion/:id"
            element={<PrivateRoute authenticate={authenticate} />}
          />
          <Route path="/products/snack" element={<Snack />} />
          <Route
            path="/products/snack/:id"
            element={<PrivateRoute authenticate={authenticate} />}
          />
        </Routes>
      </Inner>
    </div>
  );
}

export default App;
