import React from "react";

const Age = ({ age }) => {
  console.log("4-Age");
  return (
    <div>
      <h3>The age is:{age}</h3>
    </div>
  );
};

export default React.memo(Age);
