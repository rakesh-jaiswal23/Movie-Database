import React from 'react';
import popcornlogo from "../assets/popcorn_logo.png"

const Logo = () => {
  return (
    <div className="logo">
      <img src={popcornlogo} alt="Popcorn Logo" />
      <h1>Movie Database</h1>
    </div>
  );
};

export default Logo;
