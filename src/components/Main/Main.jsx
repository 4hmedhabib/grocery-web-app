import React from "react";

// components
import Showcase from "./Showcase/Showcase";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Intro from "../Products/Intro";
import Order from "./Order/Order";
import Subscribe from "./Subscription/Subscribe";

const Main = () => {
  return (
    <main>
      <Showcase />

      <WhatWeDo />

      <Intro />

      <Order />

      <Subscribe />
    </main>
  );
};

export default Main;
