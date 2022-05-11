const Order = () => {
  return (
    <div className="bg-gray-100/70 px-5 py-6 flex flex-col justify-center items-center sm:flex-row mt-8">
      {/* Information */}
      <div className="flex flex-col justify-center items-center w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        {/* Title */}
        <h1 className="text-2xl lg:text-3xl font-viga font-semi-bold tracking-wider text-center mb-3">
          Order Home Delivery of Groceries
        </h1>
        {/* Desc */}
        <p className="font-nunito font-semibold text-gray-500 text-sm tracking-wide text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
          reiciendis ipsam placeat porro sint nisi. Doloremque illo, esse
          ducimus, id illum fugiat magnam molestias neque nostrum recusandae
          amet, itaque optio.
        </p>
        {/* Support Number */}
        <div className="bg-white px-6 py-2 rounded-full shadow-md flex gap-1 mt-3">
          <div className="w-5">
            <img src="/assets/images/support.png" alt="" />
          </div>
          <span className="font-viga">+252-63-5556660</span>
        </div>
      </div>

      {/* Image */}
      <div className="w-full max-w-sm sm:max-w-xs md:max-w-md">
        <img src="/assets/images/delivery.png" alt="" />
      </div>
    </div>
  );
};

export default Order;
