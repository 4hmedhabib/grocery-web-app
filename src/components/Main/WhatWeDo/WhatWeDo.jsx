import React from "react";
import classes from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  const data = [
    {
      title: "Fast Delivery",
      desc: "Week 2 - 3 hours after ordering.",
      img: "/assets/images/truck.png",
    },
    {
      title: "Opening Hours",
      desc: "Sart - Fri : 6:00am - 9:00pm",
      img: "/assets/images/clock.png",
    },
    {
      title: "Eco-Friendly packing",
      desc: "Sustainable materials",
      img: "/assets/images/seedling.png",
    },
  ];

  return (
    <section className={classes.we_do_container}>
      <h1 className={classes.title}>What We Do</h1>
      <p className={classes.desc}>
        We help thousands of people reduce food waste.
      </p>
      <div className={classes.card_container}>
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
};

const Card = (props) => {
  const { title, desc, img } = props;

  return (
    <div className={classes.card}>
      <div className={classes.img_container}>
        <img src={img} alt="" className="w-full h-auto" />
      </div>
      <div className={classes.card_body}>
        <h3 className={classes.info_title}>{title}</h3>
        <p className={classes.info}>{desc}</p>
      </div>
    </div>
  );
};

export default WhatWeDo;
