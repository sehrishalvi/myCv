import React from "react";
import MainComponents from "./MainComponents";

export default function Skills() {
  return (
    <MainComponents title="Skills">
      <p>Headhunting</p>
      <div className="container-bar">
        <div className="skills headhunting">70%</div>
      </div>
      <p>Recruiting</p>
      <div className="container-bar">
        <div className="skills recruiting">70%</div>
      </div>
      <p>Administrator</p>
      <div className="container-bar">
        <div className="skills administrator">80%</div>
      </div>
      <p>HTML</p>
      <div className="container-bar">
        <div className="skills html">50%</div>
      </div>

      <p>CSS</p>
      <div className="container-bar">
        <div className="skills css">50%</div>
      </div>

      <p>JavaScript</p>
      <div className="container-bar">
        <div className="skills js">40%</div>
      </div>
    </MainComponents>
  );
}
