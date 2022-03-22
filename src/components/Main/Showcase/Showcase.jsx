import React from "react";
import classes from "./Showcase.module.css";

const Showcase = () => {
  return (
    <section className={classes.showcase_container}>
      <div id="info_container">
        <h1 className={classes.title}>
          Freshly <span className="text-orange-500">picked</span> <br /> from
          <span className="text-primary"> nature</span>
        </h1>
        <p className={classes.desc}>
          We provides you with various fresh grocery with 10% <br /> off for
          every $50 purchase
        </p>
      </div>
      <div className={classes.buttons_container}>
        <button className={classes.btn_main}>View Sale</button>
        <button className={classes.btn_normal}>Shop All</button>
      </div>
    </section>
  );
};

export default Showcase;
