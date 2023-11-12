import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/card/Card";

const Home = () => {
  const user = useSelector((state) => state.user);

  if (!user.user) {
    return <div>Please, log in</div>;
  }

  return (
    <div className="flex flex-wrap justify-evenly gap-5 my-10 mx-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;
