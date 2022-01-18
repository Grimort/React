import React from "react";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__bounce animate__fadeInDown">
      <p>{title}</p>
      <img src={url.url} alt={title}></img>
    </div>
  );
};

export default GifGridItem;
