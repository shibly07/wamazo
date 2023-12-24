import { CircularLoading, Error, ItemCard, PageLayout } from "@/components";
import useFetchData from "@/hooks/useFetchData";
import { useParams } from "react-router-dom";

const Category = () => {
  const { searchCategory } = useParams();
  const { loading, error, products } = useFetchData({
    url: "products",
    property: "products",
  });

  const category = () => {
    return products.filter((product) =>
      product.category
        ?.split(" ")
        .join("")
        .split("-")
        .join("")
        .toLowerCase()
        .includes((searchCategory as string).toLowerCase())
    );
  };

  return (
    <PageLayout>
      <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-5">
        {error ? (
          <Error />
        ) : loading ? (
          <CircularLoading />
        ) : (
          category().map((item) => (
            <div key={`searchedItem-${item.id}`}>
              <ItemCard product={item} type={"searchItem"} />
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
};

export default Category;
