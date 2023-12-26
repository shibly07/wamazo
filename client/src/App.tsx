import { NavBar, CircularLoading, Error } from "@/components";
import {
  Category,
  HomePage,
  ProductDetailsPage,
  SearchItems,
  SignIn,
  SignUp,
} from "@/pages";

import { Routes, Route } from "react-router-dom";

import useFetchData from "@/hooks/useFetchData";

const App = () => {
  const { loading, error, products } = useFetchData({
    url: "products",
    property: "products",
  });

  return (
    <>
      {error ? (
        <Error />
      ) : loading ? (
        <CircularLoading />
      ) : (
        <>
          <NavBar products={products} />
          <Routes>
            <Route path="/" element={<HomePage products={products} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
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
