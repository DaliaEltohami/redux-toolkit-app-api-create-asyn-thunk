import React, { useState } from "react";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { addUserThunk } from "../../redux/userSlice";
// import { addUser } from "../../redux/api";
// import { addUser } from "../../redux/userSlice";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    dispatch(addUserThunk({ name, email }));
    setEmail("");
    setName("");
  };

  return (
    <div className="form-section">
      <h1>Login Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">username: </label>
          <input
            type="text"
            id="username"
            placeholder="Please Enter Your Name ..."
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="email">email: </label>
          <input
            type="email"
            id="email"
            placeholder="Please Enter Your Email ..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          ></input>
        </div>

        {loading ? (
          "loading ..."
        ) : (
          <div className="form-group submit">
            <input type="submit"></input>
          </div>
        )}
        {error && loading === false && <div>Error !!</div>}
      </form>
    </div>
  );
}
