import React from "react";

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const apiKey = "aU1mxzY1mnTq5v2R9ylFKy3Can4oH2F0";
    const query = "Simpsons";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}"&limit=10`;
    const resp = await fetch(url);
    const data = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium,
      };
    });
    console.log(gifs);
  };
  getGifs();
  return (
    <>
      <h3 key={category}>{category}</h3>
    </>
  );
};
