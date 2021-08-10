import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Main from "./Components/Main/Main";
import Sidebar from "./Components/sidebar/Sidebar";
function App() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="main__component flex__container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
