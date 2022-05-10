import { ShoppingCartIcon } from "@heroicons/react/outline";

const AddCart = () => {
  return (
    <div className="my-5 bg-primary w-full max-w-xs py-2 rounded-full flex justify-center items-center gap-2 cursor-pointer hover:bg-primary/90">
      <ShoppingCartIcon className="w-5 h-auto text-white" />
      <div className="text-md font-bold text-white tracking-widest">
        Add Cart
      </div>
    </div>
  );
};

export default AddCart;
