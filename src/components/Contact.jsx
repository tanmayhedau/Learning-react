import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Link to={'insta'}>
        <h1>Contact via instagram</h1>
      </Link>
      <Link to={'mail'}>
        <h1>Contact via mail</h1>
      </Link>
      <Outlet/>
    </div>
  );
};

export default Contact;
