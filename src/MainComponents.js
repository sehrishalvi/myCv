import React from "react";

const MainComponents = ({ title, children }) => {
  return (
    <section className="main-items">
      <h2 className="main-items__title">{title}</h2>
      <div className="main-items__content">{children}</div>
    </section>
  );
};

export default MainComponents;
