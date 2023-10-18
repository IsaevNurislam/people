import React from "react";

const PeopleData = ({ onClick, image, firstName, email, gender, carModel }) => {
  return (
    <div onClick={onClick} className="card">
      <img src={image} alt="imageUsers" />
      <h1>{firstName}</h1>
      <p>{email}</p>
      <p>{gender}</p>
      <p>{carModel}</p>
    </div>
  );
};

export default PeopleData;
