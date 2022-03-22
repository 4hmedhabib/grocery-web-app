import { Fragment } from "react";
import {
  ShoppingCartIcon,
  PhoneIcon,
  UserCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function App() {
  return (
    <Fragment>
      <header className="font-nunito font-medium tracking-wide">
        <div
          id="top_navbar"
          className="h-8 bg-secondary hidden md:flex justify-evenly items-center text-sm"
        >
          <div id="left_top_navbar" className="flex gap-5">
            <div
              id="time_work_container"
              className=" border-r border-gray-900 pr-3"
            >
              <span>
                Sart - Fri : <span className="font-bold">6:00am - 9:00pm</span>
              </span>
            </div>
            <div id="contact_container" className="flex items-center gap-2">
              <span>
                <PhoneIcon width={16} height={16} />
              </span>
              <span>
                Call us : <span className="font-bold">+252-63-1000000</span>
              </span>
            </div>
          </div>

          <div
            id="right_top_navbar"
            className="flex justify-between items-center gap-5"
          >
            <div id="language_container">
              <span>
                Language: <span className="font-bold">English</span>
              </span>
            </div>
            <div id="currency_container">
              <span>
                Currency: <span className="font-bold"> USD$</span>
              </span>
            </div>
          </div>
        </div>

        <nav className="shadow flex justify-between px-10 items-center py-3">
          <div id="left">
            <div id="logo" className="flex justify-center items-center gap-3">
              <div id="logo-img" className="h-9 w-9">
                <img
                  src="/assets/images/logo.png"
                  className="w-full"
                  height="h-full"
                  alt="shoppery logo"
                />
              </div>
              <span className="font-black text-xl text-primary">Shoppery</span>
            </div>
          </div>

          <div
            id="right"
            className="flex gap-5 items-center justify-between w-full md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
          >
            <div id="search_container" className="w-full relative">
              <div id="input_container">
                <input
                  type="text"
                  name="search"
                  placeholder=""
                  className=" border-gray-500/20 border py-1 rounded-full w-full pr-20 outline-none pl-4"
                />
              </div>
              <div
                id="serach_icon_container"
                className="absolute top-0 right-0 bg-primary w-16 h-full rounded-tr-full rounded-br-full flex justify-center items-center cursor-pointer"
              >
                <span>
                  <SearchIcon className="text-white" width={20} height={20} />
                </span>
              </div>
            </div>
            <div id="user_container">
              <div id="user_icon">
                <UserCircleIcon width={25} height={25} />
              </div>
            </div>
            <div id="cart_container" className="relative">
              <div id="cart-circle">
                <ShoppingCartIcon width={20} height={20} />
              </div>
              <div className="bg-primary w-4 h-4 rounded-full flex justify-center items-center absolute -top-2 -right-2">
                <span className="text-white text-xs">5</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main></main>
    </Fragment>
  );
}

export default App;
