import React from "react";
import PeopleData from "./PeopleItem";
import { USERS } from "../constants";

const Peoplemap = () => {
  const cardClickHanlder = (id) => {
    alert(id);
  };
  return USERS.map((user) => (
    <PeopleData
      onClick={() => cardClickHanlder(user.id)}
      key={user.id}
      {...user}
    />
  ));
};

export default Peoplemap;
