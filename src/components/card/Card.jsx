import React from "react";
import "./card.css";

const Card = () => {
  const truncateString = (str, maxLength) => {
    if (str.length < maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength - 3) + "...";
    }
  };

  return (
    <div className="book m-2">
      <div className="content h-[100%] flex flex-col justify-evenly items-center">
        <p className="">
          {truncateString(
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit praesentium iure pariatur porro itaque dicta corrupti nesciunt quisquam voluptatem sapiente veritatis reiciendis aliquid, quaerat numquam animi accusamus deleniti quam illum.",
            120
          )}
        </p>
        <button className="customBtn  py-3 px-10">Ver más</button>
      </div>
      <div className="cover">
        <p>Nota 1</p>
      </div>
    </div>
  );
};

export default Card;
