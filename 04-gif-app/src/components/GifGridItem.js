import React from "react";
import PropTypes from "prop-types";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__bounce animate__fadeInDown">
      <p>{title}</p>
      <img src={url} alt={title}></img>
    </div>
  );
};

PropTypes.GifGridItem = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
