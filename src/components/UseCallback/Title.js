import React from "react";

const Title = () => {
  console.log("1-Tite");
  return (
    <div>
      <h1>My App</h1>
      <hr />
    </div>
  );
};

export default React.memo(Title);
