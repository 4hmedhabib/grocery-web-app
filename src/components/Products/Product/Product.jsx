import AddCart from "../../UI/AddCart";

const Product = () => {
  return (
    <div className="w-60 hover:shadow-lg px-2 py-2 rounded-lg border border-gray-100 relative flex flex-col items-center">
      <img src="/assets/products/fresh-strawberries.jpeg" alt="" />
      <div className="absolute top-2 left-2 bg-red-500 px-2 rounded-full">
        {/* discount */}
        <span className="text-sm text-white">25%</span>
      </div>
      {/* Title */}
      <h1 className="text-lg font-bold tracking-wide text-center">
        Fresh Strawberry
      </h1>

      {/* Price */}
      <div className="flex gap-3">
        <span className="text-red-500 font-bold tracking-wide">$8.99</span>
        <span className="text-gray-400 font-bold tracking-wide line-through">
          $12.99
        </span>
      </div>
      <AddCart />
    </div>
  );
};

export default Product;
