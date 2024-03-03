import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { name } = useSelector((state) => state.user.user);

  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Hello {name}</a>
        </li>
      </ul>
    </div>
  );
}
