import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";

export default function Header() {
  const { name } = useSelector((state) => state.user.user);
  return (
    <div className="header">
      <div className="logo">Dalia Eltohami</div>
      <div className="greetings">Hello {name}!</div>
    </div>
  );
}
