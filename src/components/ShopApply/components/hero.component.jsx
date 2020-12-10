import React from "react";

const HeroComponent = ({ title, titleTwo, titleThree, style }) => {
  return (
    <section className="section-hero" style={style}>
      <span>
        <div>{title}</div>
        <div>{titleTwo}</div>
        <div>{titleThree}</div>
      </span>
    </section>
  );
};

export default HeroComponent;
