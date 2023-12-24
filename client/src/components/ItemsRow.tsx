import { ItemRowProps } from "@/types/Types";
import { ItemCard } from "@/components";

const ItemsRow = ({ title, products }: ItemRowProps) => {
  return (
    <div className="bg-white px-4 pt-6 pb-8 overflow-hidden">
      {/* Title of the row*/}
      <div className="flex items-center gap-x-5 justify-between md:justify-normal mb-3">
        <h1 className="font-bold text-lg capitalize">{title}</h1>
        <h3 className="text-[#639AA8] md:hover:text-[#CB511F] md:hover:underline text-xs">
          See all deals
        </h3>
      </div>

      {/* Item cards */}

      {!products ? null : (
        <div className="flex overflow-x-scroll gap-x-7 pb-5">
          {products?.map((item) => (
            <ItemCard key={item?.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemsRow;
