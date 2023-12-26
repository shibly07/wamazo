import { NavBar, CircularLoading, Error } from "@/components";
import {
  Category,
  HomePage,
  ProductDetailsPage,
  SearchItems,
  SignIn,
} from "@/pages";

import { Routes, Route, useLocation } from "react-router-dom";

import useFetchData from "@/hooks/useFetchData";

const App = () => {
  const { loading, error, products } = useFetchData({
    url: "products",
    property: "products",
  });

  const { pathname: currentPageLocation } = useLocation();

  return (
    <>
      {error ? (
        <Error />
      ) : loading ? (
        <CircularLoading />
      ) : (
        <>
          {currentPageLocation !== "/signin" && <NavBar products={products} />}
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<HomePage products={products} />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/search/:searchItems" element={<SearchItems />} />
            <Route path="/category/:searchCategory" element={<Category />} />
            <Route path="*" element={<HomePage products={products} />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
