import "./App.css";
import { Router, Routes, Route } from "react-router";
import Navbar from "./components/Navigation";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        {/* <Route path="" /> */}
      </Routes>
    </div>
  );
}

export default App;
