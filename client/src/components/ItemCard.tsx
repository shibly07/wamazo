import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";

import { Link } from "react-router-dom";
import { ItemCardProps } from "@/types/Types";

export default function ItemCard({ product, type }: ItemCardProps) {
  const { id, brand, discountPercentage, price, thumbnail, title, rating } =
    product;
  return !id ? (
    <></>
  ) : (
    <Link to={`/product/${id}`}>
      <div className=" md:w-64">
        <Card
          className={` ${
            type === "searchItem"
              ? "h-48 md:h-auto"
              : "h-[19rem] md:h-auto w-36 md:w-full"
          }`}
        >
          <CardActionArea>
            <div
              className={
                type === "searchItem" ? "flex md:flex-col md:h-auto" : ""
              }
            >
              <div>
                <CardMedia
                  component="img"
                  className={`${
                    type === "searchItem"
                      ? "object-cover h-full md:h-64"
                      : "object-cover h-28 w-full md:h-64"
                  }`}
                  image={thumbnail}
                  alt={title}
                />
              </div>

              <CardContent className="w-full">
                <div className="mb-3 hidden md:flex md:flex-col">
                  {!discountPercentage ? null : (
                    <>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: 11 }}
                        className="bg-[#CC0C39] px-2 py-1 text-white rounded-md text-center"
                      >
                        {`${discountPercentage.toFixed(1)}% Off !`}
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: 13 }}
                        className="text-[#CC0C39] text-center"
                      >
                        &nbsp; Deal
                      </Typography>
                    </>
                  )}
                </div>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  className={`${
                    brand === "Apple" ? "" : "capitalize"
                  } line-clamp-2`}
                >
                  {title}
                </Typography>
                <Rating value={rating} precision={0.5} readOnly size="small" />

                <div className="flex flex-col md:flex-row">
                  <div className="flex">
                    {!price ? null : discountPercentage &&
                      discountPercentage > 0 ? (
                      <>
                        <Typography sx={{ fontSize: 10 }} className="text-left">
                          $
                        </Typography>
                        <Typography sx={{ fontSize: 15 }}>
                          {(price * ((100 - discountPercentage) / 100)).toFixed(
                            2
                          )}
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography sx={{ fontSize: 10 }} className="text-left">
                          $
                        </Typography>
                        <Typography sx={{ fontSize: 15 }}>{price}</Typography>
                      </>
                    )}
                  </div>
                  {!discountPercentage && discountPercentage <= 0 ? null : (
                    <div className="flex items-center">
                      <Typography
                        sx={{ fontSize: 12 }}
                        className="text-gray-500"
                      >
                        &nbsp;&nbsp;Was:&nbsp;
                      </Typography>
                      <Typography
                        sx={{ textDecoration: "line-through", fontSize: 12 }}
                        className="text-gray-500"
                      >
                        ${price}
                      </Typography>
                    </div>
                  )}
                </div>
                <div className="mt-3 flex flex-col md:hidden">
                  {!discountPercentage ? null : (
                    <>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: 11 }}
                        className="bg-[#CC0C39] px-2 py-1 text-white rounded-md text-center"
                      >
                        {`${discountPercentage.toFixed(1)}% Off !`}
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: 13 }}
                        className="text-[#CC0C39] text-center"
                      >
                        &nbsp; Deal
                      </Typography>
                    </>
                  )}
                </div>
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      </div>
    </Link>
  );
}

{
  /* <CardContent className="w-full">
                <div className="mb-3 hidden md:flex md:flex-col">
                  {!discountPercentage ? null : (
                    <>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: 11 }}
                        className="bg-[#CC0C39] px-2 py-1 text-white rounded-md text-center"
                      >
                        {`${discountPercentage.toFixed(1)}% Off !`}
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: 13 }}
                        className="text-[#CC0C39] text-center"
                      >
                        &nbsp; Deal
                      </Typography>
                    </>
                  )}
                </div>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  className={brand === "Apple" ? "" : "capitalize"}
                >
                  {title}
                </Typography>

                <div className="flex flex-col md:flex-row">
                  <div className="flex">
                    {!price ? null : discountPercentage &&
                      discountPercentage > 0 ? (
                      <>
                        <Typography sx={{ fontSize: 10 }} className="text-left">
                          $
                        </Typography>
                        <Typography sx={{ fontSize: 15 }}>
                          {(price * ((100 - discountPercentage) / 100)).toFixed(
                            2
                          )}
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography sx={{ fontSize: 10 }} className="text-left">
                          $
                        </Typography>
                        <Typography sx={{ fontSize: 15 }}>{price}</Typography>
                      </>
                    )}
                  </div>
                  {!discountPercentage && discountPercentage <= 0 ? null : (
                    <div className="flex items-center">
                      <Typography
                        sx={{ fontSize: 12 }}
                        className="text-gray-500"
                      >
                        &nbsp;&nbsp;Was:&nbsp;
                      </Typography>
                      <Typography
                        sx={{ textDecoration: "line-through", fontSize: 12 }}
                        className="text-gray-500"
                      >
                        ${price}
                      </Typography>
                    </div>
                  )}
                </div>
                <div className="mt-3 flex flex-col md:hidden">
                  {!discountPercentage ? null : (
                    <>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: 11 }}
                        className="bg-[#CC0C39] px-2 py-1 text-white rounded-md text-center"
                      >
                        {`${discountPercentage.toFixed(1)}% Off !`}
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{ fontSize: 13 }}
                        className="text-[#CC0C39] text-center"
                      >
                        &nbsp; Deal
                      </Typography>
                    </>
                  )}
                </div>
              </CardContent> */
}
