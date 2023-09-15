import React from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";

function topic() {
  return (
    <div className="App">
      <Sidebar />
      <div className="HeaderAndFeed">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default topic;
