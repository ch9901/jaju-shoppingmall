import "./App.css";
import { Router, Routes, Route } from "react-router";
import Navbar from "./components/Navigation";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import styled from "styled-components";

export const Inner = styled.div`
  padding: 20px 100px;
  margin-top: 30px;
`;
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="" /> */}
      </Routes>
    </div>
  );
}

export default App;
