import React from "react";

import { MyProvider } from "./context";
import User from "./components/ContextAPI/User";

const ContextAPI = () => {
  return (
    <div>
      <MyProvider>
        <User />
      </MyProvider>
    </div>
  );
};

export default ContextAPI;
