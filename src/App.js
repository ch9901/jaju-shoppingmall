import "./App.css";
import { Router, Routes, Route } from "react-router";
import Navbar from "./components/Navigation";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import styled from "styled-components";

const Inner = styled.div`
  padding: 20px 100px;
  margin-top: 30px;
`;

function App() {
  return (
    <div>
      <Navbar />
      <Inner>
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="" /> */}
        </Routes>
      </Inner>
    </div>
  );
}

export default App;
