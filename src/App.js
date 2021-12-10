import React from "react";

// import UseStEf from "./UseStEf";
import UseCallback from "./UseCallback";

const App = ({ initialCount }) => {
  return (
    <div>
      {/* useState & useEffect hooks */}
      {/* <UseStEf initialCount={initialCount} /> */}

      {/* memo & useCallback hooks */}
      <UseCallback />
    </div>
  );
};

export default App;
