import { ShoppingCartIcon } from "@heroicons/react/outline";

const ClockItem = (props) => {
  return (
    <div className="bg-white w-16 h-14 rounded-lg shadow-md flex flex-col justify-center items-center">
      <span className="text-md font-bold">{props.value}</span>
      <span className="bg-green-200 w-1/2 border-2" />
      <span className="text-sm py-1">{props.title}</span>
    </div>
  );
};

const HotOffer = () => {
  return (
    // Hot Offer
    <div className="bg-white shadow-xl w-full max-w-md sm:max-w-sm px-2 pt-3 border-2 border-gray-50 rounded-xl flex flex-col items-center justify-center">
      <h1 className="text-xl font-black text-center mb-3">
        This week's hot offer
      </h1>
      <hr className="w-full bg-gray-500" />
      <div>
        <img src="/assets/products/greens_bundle.jpg" alt="" className="" />
      </div>

      <div className="flex gap-3">
        <ClockItem value="12" title="days" />
        <ClockItem value="8" title="hours" />
        <ClockItem value="45" title="minutes" />
        <ClockItem value="53" title="seconds" />
      </div>
      {/* Cotent Text */}
      <div className="mt-5 flex flex-col justify-center items-center">
        <h3 className="text-lg font-bold text-center text-primary">
          Weekly Greens Bundle
        </h3>
        <div className="flex justify-center gap-3 w-1/2">
          <span className="text-red-500 text-md font-black tracking-wider">
            $29
          </span>
          <span className="text-gray-400 line-through text-md font-bold tracking-wider">
            $49
          </span>
        </div>
        <p className="mt-3 text-center text-md tracking-wider text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt in
          reprehenderit vitae, enim voluptatum ratione?
        </p>
      </div>
      <div className="my-5 bg-primary w-full max-w-xs py-2 rounded-full flex justify-center items-center gap-2">
        <ShoppingCartIcon className="w-5 h-auto text-white" />
        <div className="text-md font-bold text-white tracking-widest">
          Add Cart
        </div>
      </div>
    </div>
  );
};

export default HotOffer;
