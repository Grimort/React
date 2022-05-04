import React, { useEffect, useState } from "react";
import { Message } from "./Message.js";
import "./effects.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;
  useEffect(() => {
    // console.log("HEY!");
  }, []);

  // useEffect(() => {
  //   // console.log("form changed!");
  // }, [formState]);

  // useEffect(() => {
  //   // console.log("email changed!");
  // }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>Simple Form - useEfect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="E-Mail"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === "123" && <Message></Message>}
    </>
  );
};
