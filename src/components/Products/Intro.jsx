import HotOffer from "./HotOffer/HotOffer";
import Product from "./Product/Product";
import Card from "../UI/Card";

const Intro = () => {
  return (
    <div className="flex flex-col sm:items-center justify-between md:flex-row mx-3 font-nunito lg:mx-20 md:items-start gap-3">
      {/* Hot Offer */}
      <HotOffer />

      {/* Product List */}
      <div className="flex-grow">
        <Card>
          {/* Title */}
          <div className="py-2 flex justify-center items-center">
            <h1 className="text-center text-gray-800 font-black text-xl tracking-wide mb-2">
              Fruits & Vegetables
            </h1>
          </div>
          <hr className="w-full" />
          {/* Product */}
          <div className="flex gap-3 mt-5 flex-wrap items-center justify-center">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Intro;
