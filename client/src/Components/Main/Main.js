import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./main.css";
import Card from "../Card/Card";
function main() {
  return (
    <div className="main__container">
      <div className="total__search__result flex__container">
        14005 total internships
        <KeyboardArrowDownIcon style={{ marginTop: "5px" }} />
      </div>
      <div className="cards__container">
        <Card
          position={"Bit Brothers"}
          company={"Frontend Developer"}
          stipend={"₹5000"}
          applyBy={"17 Aug' 21"}
        />
        <Card
          position={"Web Developer"}
          company={"Amazon"}
          stipend={"₹15000"}
          applyBy={"20 Aug' 21"}
        />
        <Card
          position={"React Developer"}
          company={"Thumb stack"}
          stipend={"₹5000"}
          applyBy={"18 Aug' 21"}
        />
        <Card
          position={"Campus Absaddor"}
          company={"NETFLIX"}
          stipend={"₹50000"}
          applyBy={"24 Aug' 21"}
        />
      </div>
    </div>
  );
}

export default main;
