import React from "react";
import logo from "./logo.svg";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "roboto",
      }}
    >
      <img src={logo} alt="logo" width={150} />
      <h1
        style={{
          color: "#07059d",
          margin: 0,
        }}
      >
        MeterMate Admin Dashboard coming soon...
      </h1>
      <p>What's up, Come again page will available soon </p>
    </div>
  );
};

export default App;
