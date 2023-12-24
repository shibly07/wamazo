import { useEffect, useState } from "react";
import { Product } from "@/types/Types";

type UseFetchDataProps = {
  url: string;
  property?: string;
};

const useFetchData = ({ url, property }: UseFetchDataProps) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[] | []>([]);
  const [error, setError] = useState(false);

  const BASE_URL = "https://dummyjson.com";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let response: Product[];
        if (property) {
          const { products } = await fetch(`${BASE_URL}/${url}`).then((res) =>
            res.json()
          );
          response = products;
        } else {
          response = [
            await fetch(`${BASE_URL}/${url}`).then((res) => res.json()),
          ];
        }

        setError(!response?.length ? true : false);
        setLoading(false);
        setProducts(property ? response : response);
      } catch {
        setProducts([]);
        setLoading(false);
        setError(true);
      }
    };

    fetchProducts();
  }, [url, property]);

  return { loading, error, products };
};

export default useFetchData;
