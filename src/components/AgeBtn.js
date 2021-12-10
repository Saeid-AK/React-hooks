import React from "react";

const AgeBtn = ({ handleAge }) => {
  console.log("5-AgeBtn");
  return (
    <div>
      <button onClick={handleAge}>Increment the Age</button>
    </div>
  );
};

export default React.memo(AgeBtn);
