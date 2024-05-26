import React from "react";
import { Badge } from "react-bootstrap";
const Tags = (props) => {
  return (
    <>
      <Badge bg={props.color} className="w-100 text-center">
        {props.text}
      </Badge>
    </>
  );
};

export default Tags;
