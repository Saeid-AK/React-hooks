import React from "react";

const Count = ({ count }) => {
  console.log("2-Count");
  return (
    <div>
      <h3>The count is: {count}</h3>
    </div>
  );
};

export default React.memo(Count);
