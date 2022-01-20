import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn" key={category}>
        {category}
      </h3>
      <div className="card-grid animate__animated animate__bounce animate__fadeIn">
        {loading && (
          <p className="animate__animated animate__flash">Loading...</p>
        )}
        {images.map((img) => (
          <GifGridItem key={img.id} url={img.url.url} title={img.title} />
        ))}
      </div>
    </>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
