import React from "react";
import Switch from "react-switch";
import SearchIcon from "@material-ui/icons/Search";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar__container flex__container">
      <div className="filter__container flex__container">
        <img
          height="30px"
          width="30px"
          src="https://img.icons8.com/fluency/48/000000/filter.png"
          alt="filter"
        />
        &nbsp; Filters
      </div>
      <div className="preference__checkbox">
        <input type="checkbox" /> Show internships as per my<br></br>
        <span className="preferances">preferences</span>
      </div>
      <div className="input__field flex__container">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          class="catergory"
          className="input"
          placeholder="e.g. Marketing"
        />
      </div>
      <div className="input__field flex__container">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          class="location"
          className="input"
          placeholder="e.g. Delhi"
        />
      </div>
      <div
        className="input__field switch__field flex__container"
        style={{ marginTop: "10px" }}
      >
        <div>Work from home</div>
        <div className="flex__container">
          <Switch
            disabled={true}
            height={15}
            width={35}
            handleDiameter={18}
            offHandleColor="#111"
          />
        </div>
      </div>
      <div className="input__field switch__field flex__container">
        <div>Part-time</div>
        <div className="flex__container">
          <Switch
            disabled={true}
            height={15}
            width={35}
            handleDiameter={18}
            offHandleColor="#111"
          />
        </div>
      </div>
      <div className="input__field flex__container">
        <label htmlFor="start__from">Starting from (or after)</label>
        <input
          type="date"
          class="start__from"
          className="input"
          placeholder="Choose from"
        />
      </div>
      <div className="input__field flex__container">
        <label htmlFor="max__from">Max. duration (months)</label>
        <input
          type="month"
          class="max__from"
          className="input"
          placeholder="Choose duration"
        />
      </div>
      <div
        className="input__field switch__field flex__container"
        style={{ marginTop: "10px" }}
      >
        <div>Internship for women</div>
        <div className="flex__container">
          <Switch
            disabled={true}
            height={15}
            width={35}
            handleDiameter={18}
            offHandleColor="#111"
          />
        </div>
      </div>
      <div className="input__field switch__field flex__container">
        <div>Internships with job offer</div>
        <div className="flex__container">
          <Switch
            disabled={true}
            height={15}
            width={35}
            handleDiameter={18}
            offHandleColor="#111"
          />
        </div>
      </div>
      <div
        className="input__field flex__container"
        style={{ alignItems: "flex-end", color: "#007bff", cursor: "pointer" }}
      >
        Clear all
      </div>
      <div className="flex__container">
        <hr></hr>
        <div style={{ margin: "0px 15px" }}>OR</div>
        <hr></hr>
      </div>
      <div className="search__section flex__container">
        <div className="search__header">Search</div>
        <div className="search__field flex__container">
          <input
            className="input__search"
            type="text"
            placeholder="e.g. Mumbai,infosys,Design"
          />
          <div className="search__icon flex__container">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
