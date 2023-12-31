// Overlay.js
import React from "react";

const Overlay = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        zIndex: 1000,
      }}
    />
  );
};

export default Overlay;
