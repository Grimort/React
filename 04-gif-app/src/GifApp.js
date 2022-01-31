import { useState } from "react";
import { AddCategory } from "../src/components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = ({ defaultCategories = ["Memes"] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  // const handleAdd = () => {
  //   return setCategories([...categories, "cat4"]);
  // };

  return (
    <>
      <h2>GifApp</h2>
      <hr />
      <AddCategory setCategories={setCategories}></AddCategory>
      {/* <button onClick={handleAdd}>Add</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ol>
    </>
  );
};

export default GifApp;
