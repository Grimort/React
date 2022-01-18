import React from "react";
import { useFetchGifs } from "../useFetchGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 key={category}>{category}</h3>
      <div className="card-grid animate__animated animate__bounce animate__fadeIn">
        {loading && <p>Loading...</p>}
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
