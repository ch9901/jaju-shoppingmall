import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navigation";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "./redux/actions/productAction";
import PrivateRoute from "./routes/PrivateRoute";
import Kitchenware from "./pages/Kitchenware";
import Fashion from "./pages/Fashion";
import Snack from "./pages/Snack";
import { useSearchParams } from "react-router-dom";
import { setPageTitle } from "./util";

const Inner = styled.div`
  padding: 20px 100px;
  margin-top: 30px;
`;

function App() {
  const [query, setQuery] = useSearchParams();
  //기본값 false임 다 끝나면 바꿔놓을 것
  const [authenticate, setAuthenticate] = useState(true);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    // console.log("searchQuery : ", searchQuery);
    dispatch(productAction.getProduct(searchQuery));
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  useEffect(() => {
    setPageTitle("JAJU");
  }, []);

  const productList = useSelector((state) => state.products.productList);
  const kitchenwareList = productList?.kitchenware;
  const fashionList = productList?.fashion;
  const snackList = productList?.snack;
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Inner>
        <Routes>
          <Route
            path="/"
            element={
              <ProductAll
                loading={loading}
                kitchenwareList={kitchenwareList}
                fashionList={fashionList}
                snackList={snackList}
              />
            }
          />
          <Route
            path="/login"
            element={<Login setAuthenticate={setAuthenticate} />}
          />
          <Route
            path="/products/kitchenware"
            element={<Kitchenware kitchenwareList={kitchenwareList} />}
          />
          <Route
            path="/products/:productCategory/:id"
            element={
              <PrivateRoute
                authenticate={authenticate}
                setAuthenticate={setAuthenticate}
              />
            }
          />
          <Route
            path="/products/fashion"
            element={<Fashion fashionList={fashionList} />}
          />
          <Route
            path="/products/snack"
            element={<Snack snackList={snackList} />}
          />
        </Routes>
      </Inner>
    </div>
  );
}

export default App;
