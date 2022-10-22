const Footer = () => {
  return (
    <div className="pt-8 mt-5">
      <div className="flex flex-wrap justify-around px-8 pb-12 gap-8">
        {/* Company Information */}
        <div className="flex flex-col justify-center items-start">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-3">
            <img src="/assets/images/logo.png" alt="" className="h-16" />
            <h1 className="text-xl font-viga font-bold tracking-widest text-primary">
              Shoppery
            </h1>
          </div>
          {/* Description */}
          <div className="flex flex-col items-center justify-center w-full max-w-md mb-3">
            <p className="text-left font-nunito font-semibold tracking-wide text-gray-500 mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam eius maxime voluptatum temporibus numquam nobis.
            </p>
            {/* Social media */}
            <div className="flex gap-3 items-center justify-center">
              <img
                src="/assets/images/social/facebook.png"
                alt=""
                className="w-6 h-6"
              />
              <img
                src="/assets/images/social/instagram.png"
                alt=""
                className="w-6 h-6"
              />
              <img
                src="/assets/images/social/linkedin.png"
                alt=""
                className="w-6 h-6"
              />
              <img
                src="/assets/images/social/youtube.png"
                alt=""
                className="w-8 h-6"
              />
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col gap-3">
            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 shadow-md rounded-full flex justify-center items-center">
                <img
                  src="/assets/images/location.png"
                  alt=""
                  className="h-10"
                />
              </div>
              <div className="w-full max-w-sm">
                <span className="font-nunito tracking-wide font-semibold text-gray-500">
                  Dahabshiil Business Center, Rd Number 1, Hargeisa, Somaliland
                </span>
              </div>
            </div>

            {/* Support */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 shadow-md rounded-full flex justify-center items-center">
                <img src="/assets/images/support.png" alt="" className="h-10" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-nunito tracking-wide font-semibold text-gray-500">
                  Sat - Fri 6:00am - 8:00pm
                </span>
                <span className="font-viga text-lg tracking-wider font-semibold">
                  +252-63-5556660
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-viga text-lg tracking-wider font-semibold mb-3">
            Useful Links
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="font-nunito font-semibold text-gray-500">
              About us
            </li>
            <li className="font-nunito font-semibold text-gray-500">
              Contact us
            </li>
            <li className="font-nunito font-semibold text-gray-500">
              Shopy by Category
            </li>
            <li className="font-nunito font-semibold text-gray-500">
              Customer Support
            </li>
            <li className="font-nunito font-semibold text-gray-500">
              Shopping Cart
            </li>
            <li className="font-nunito font-semibold text-gray-500">FAQs</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-viga text-lg tracking-wider font-semibold mb-3">
            Customer Care
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="font-nunito font-semibold text-gray-500">
              My Account
            </li>
            <li className="font-nunito font-semibold text-gray-500">
              Payment & Delivery
            </li>
            <li className="font-nunito font-semibold text-gray-500">FAQ</li>
            <li className="font-nunito font-semibold text-gray-500">
              Licence & Permits
            </li>
            <li className="font-nunito font-semibold text-gray-500">
              Our Partners
            </li>
            <li className="font-nunito font-semibold text-gray-500">
              Customer Support
            </li>
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="font-viga text-lg tracking-wider font-semibold mb-3">
            Product Categories
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="font-nunito font-semibold text-gray-500">
                Fruits & Vegetables
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="font-nunito font-semibold text-gray-500">
                Snacks & Canned Goods
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="font-nunito font-semibold text-gray-500">
                Careal & Pasta
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="font-nunito font-semibold text-gray-500">
                Cofee & Tea
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="font-nunito font-semibold text-gray-500">
                Herbs & Spices
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="font-nunito font-semibold text-gray-500">
                Oil & Sauces
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="font-nunito font-semibold text-gray-500">
                Bakery, Flour & Sweateners
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 gap-3 flex flex-col sm:flex-row sm:px-8 md:px-16 justify-between items-center p-3">
        <div className="flex gap-3">
          <span className="font-viga tracking-wider text-gray-500 text-sm">
            Copyright
          </span>
          <span className="font-viga tracking-wider text-gray-500 text-sm">
            Shoppery. All rights reserved
          </span>
        </div>
        <div className="flex gap-3 bg-white px-3 py-2 rounded-md">
          <img
            src="/assets/images/companies/mastercard.png"
            alt=""
            className="h-6 w-auto"
          />
          <img
            src="/assets/images/companies/evcplus.png"
            alt=""
            className="h-6 w-auto"
          />
          <img
            src="/assets/images/companies/zaad.png"
            alt=""
            className="h-6 w-auto"
          />
          <img
            src="/assets/images/companies/eDahab.png"
            alt=""
            className="h-6 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
