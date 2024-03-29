const Subscribe = () => {
  return (
    <div className="bg-blue-50/50 flex flex-col justify-center items-center sm:flex-row sm:justify-evenly py-8">
      <div className="w-full sm:max-w-3xl flex flex-col items-center  md:flex-row  md:justify-between gap-3">
        {/* Information */}
        <div className="flex flex-col justify-center items-center sm:items-start">
          {/* Title */}
          <h1 className="font-viga text-lg mb-1">Save 20% on first shopping</h1>
          {/* Desc */}
          <p className="font-nunito text-sm font-bold tracking-wide text-gray-600">
            Sign Up to Newsletter
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-full overflow-hidden shadow-sm  border border-gray-100 relative w-full max-w-sm sm:max-w-xs md:max-w-sm">
          <input
            type="email"
            name="email"
            className="px-2 rounded-tl-full rounded-bl-full outline-none py-2 font-nunito font-semibold tracking-wider w-full"
          />
          <button className="bg-primary absolute right-0 bottom-0 top-0 w-32 flex items-center justify-center gap-2 text-white font-nunito tracking-wider">
            <img src="/assets/images/send.png" alt="" className="h-5" />
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
