import React from "react";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";
const AboutUs2 = () => {
  return (
    <>
      {" "}
      <h1> this is food delivery app</h1>
      <h2>hope you like the website </h2>
      <p>loremjjc cdkekdfdjfo</p>
    </>
  );
};
class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>This is food delivery app</h1>
        <h2>hope you like the experience of the website</h2>
        <p>
          this website is created by <Outlet></Outlet>{" "}
        </p>
      </div>
    );
  }
}

export default About;
