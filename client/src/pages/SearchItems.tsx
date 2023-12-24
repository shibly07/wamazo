import { CircularLoading, Error, ItemCard, PageLayout } from "@/components";
import { useParams } from "react-router-dom";
import useFetchData from "@/hooks/useFetchData";

const SearchItems = () => {
  const { searchItems } = useParams();

  const { loading, error, products } = useFetchData({
    url: "products",
    property: "products",
  });

  const foundItems = products?.filter((item) => {
    if (searchItems?.length) {
      return (
        item?.title?.toLowerCase().includes(searchItems?.toLowerCase()) ||
        item?.category
          ?.split(" ")
          .join("")
          .split("-")
          .join("")
          .toLowerCase()
          .includes(searchItems?.toLowerCase()) ||
        item?.description?.toLowerCase().includes(searchItems?.toLowerCase()) ||
        item?.brand?.toLowerCase().includes(searchItems?.toLowerCase())
      );
    }
  });

  return (
   <PageLayout> 
      <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-5">
        {error ? (
          <Error />
        ) : loading ? (
          <CircularLoading />
        ) : !foundItems.length ? (
          <div>
            <p>
              Not results for <span className="font-bold ">{searchItems}</span>.
            </p>
            <p>Try checking your spelling or use more general terms</p>
          </div>
        ) : (
          foundItems?.map((item) => (
            <div key={`searchedItem-${item.id}`}>
              <ItemCard product={item} type={"searchItem"} />
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
};

export default SearchItems;
