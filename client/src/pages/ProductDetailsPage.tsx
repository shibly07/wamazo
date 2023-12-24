import { PageLayout, SelectQuantity } from "@/components";
import { Button, Rating, Typography } from "@mui/material";
import { CircularLoading, Error } from "@/components";

import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "@/hooks/useFetchData";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState<number>(1);

  const { loading, error, products } = useFetchData({
    url: `products/${id}`,
  });
  const product = products[0];

  return (
    <>
      {error ? (
        <Error />
      ) : loading ? (
        <CircularLoading />
      ) : (
        <div className="flex flex-col md:grid md:grid-rows-3 md:grid-flow-col md:gap-4">
          <PageLayout className="md:col-start-2 md:row-span-1">
            <div className="mt-6 flex flex-col">
              <h1 className="text-gray-500">{product?.title}</h1>
              {product?.rating && (
                <div className="flex flex-row gap-x-2 items-center">
                  <Typography component="legend">
                    {product?.rating.toFixed(1)}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={product?.rating}
                    precision={0.5}
                    readOnly
                  />
                </div>
              )}
            </div>
          </PageLayout>

          <PageLayout className="md:col-start-1 md:row-span-3">
            <div className="mt-10">
              <img src={product?.images[0]} />
            </div>
          </PageLayout>

          {/* Divider on mobile screen*/}
          <div className="h-1 my-6 bg-[#E6E6E6] w-full md:hidden" />

          <PageLayout className="md:col-start-2 md:row-span-2">
            <>
              {!product?.discountPercentage ? null : (
                <div className="flex flex-col gap-y-3">
                  <p className=" text-3xl flex gap-x-3">
                    <span className="text-[#CC0C39]">{`-${product?.discountPercentage.toFixed(
                      1
                    )}%`}</span>
                    <span className="font-bold">
                      $
                      {(
                        product?.price *
                        ((100 - product?.discountPercentage) / 100)
                      ).toFixed(2)}
                    </span>
                  </p>
                  <p className="text-gray-500 line-through">
                    List Price: ${product?.price}
                  </p>
                  <p className="capitalize">Category: {product?.category}</p>
                </div>
              )}

              <div className="flex flex-col gap-y-4 mt-8">
                {product?.stock === null || product?.stock === undefined ? (
                  <p className="text-red-700 text-lg">Out of stock!</p>
                ) : (
                  <p className="text-green-700 text-lg">In Stock</p>
                )}

                <SelectQuantity
                  setQuantity={setQuantity}
                  stockAvailable={product?.stock}
                />

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFA41C",
                    borderColor: "#FF8F00",
                    color: "black",
                    borderRadius: "10rem",
                    textTransform: "capitalize",
                  }}
                  className="md:w-72"
                >
                  Buy now
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFD814",
                    borderColor: "#FCD200",
                    color: "black",
                    borderRadius: "10rem",
                    textTransform: "capitalize",
                  }}
                  className="md:w-72"
                >
                  Add to cart
                </Button>
              </div>
            </>
          </PageLayout>
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
