import { useState, useEffect } from "react";
import { GetGifs } from "./helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      GetGifs(category).then((imgs) => {
        setState({
          data: imgs,
          loading: false,
        });
      });
    }, 1000);
  }, [category]);

  return state;
};
