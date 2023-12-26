import { ItemsRow, PageLayout } from "@/components";
import { HomePageProps } from "@/types/Types";

const HomePage = ({ products }: HomePageProps) => {
  return (
    <>
      {!products ? null : (
        <div className=" bg-bg-white min-h-screen flex flex-col gap-4">
          <PageLayout>
            <div className="flex flex-col gap-y-5">
              <ItemsRow
                title="Popular Deals"
                products={products
                  ?.slice(0)
                  .sort((a, b) => b.discountPercentage - a.discountPercentage)
                  .slice(0, 9)}
              />

              <ItemsRow
                title="Deals Under $25"
                products={products
                  ?.slice(0)
                  .sort((a, b) => a.price - b.price)
                  .filter((item) => item.price <= 25)
                  .slice(0, 9)}
              />
            </div>
          </PageLayout>
        </div>
      )}
    </>
  );
};

export default HomePage;
