import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}>
      <a href="/login">login</a>
      <a href="/signup">signup</a>
      <a href="/home">Home</a>
      <a href="/post">Post Page</a>
    </div>
  );
};

export default Navbar;
