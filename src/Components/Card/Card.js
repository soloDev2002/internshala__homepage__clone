import React from "react";
import "./card.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function Card({ position, company, stipend, applyBy }) {
  return (
    <div className="card__container">
      <div className="position__field">{position}</div>
      <div className="company__field" style={{ color: "grey" }}>
        {company}
      </div>
      <div className="work__from__home flex__container">
        <HomeOutlinedIcon
          style={{
            marginRight: "5px",
            fontSize: "18px",
            marginTop: "5px",
            color: "grey",
          }}
        />
        <div>Work From Home</div>
      </div>
      <table className="table">
        <tbody>
          <tr>
            <td style={{ color: "grey" }}>START DATE</td>
            <td style={{ color: "grey" }}>DURATION</td>
            <td style={{ color: "grey" }}>STIPEND</td>
            <td style={{ color: "grey" }}>APPLY BY</td>
          </tr>
          <tr>
            <td>Immediately</td>
            <td>6 Months</td>
            <td>{stipend}</td>
            <td>{applyBy}</td>
          </tr>
        </tbody>
      </table>
      <div className="footer flex__container">
        <div className="details flex__container">
          <div className="topic flex__container">Internship</div>
          <div className="topic flex__container">Part Time Allowed</div>
        </div>
        <div
          className="view__details flex__container"
          style={{ color: "#1795df" }}
        >
          View details <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
}

export default Card;
