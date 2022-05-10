import HotOffer from "./HotOffer/HotOffer";
import Product from "./Product/Product";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-between sm:flex-row mx-3 font-nunito md:mx-20">
      {/* Hot Offer */}
      <HotOffer />

      {/* Product List */}
      <div>
        {/* Product */}
        <Product />
      </div>
    </div>
  );
};

export default Intro;
