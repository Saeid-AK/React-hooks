import React from "react";

// import UseStEf from "./UseStEf";
// import UseCallback from "./UseCallback";
// import UseRef from "./UseRef";
import ContextAPI from "./ContextAPI";

const App = ({ initialCount }) => {
  return (
    <div>
      {/* useState & useEffect hooks */}
      {/* <UseStEf initialCount={initialCount} /> */}

      {/* memo & useCallback hooks */}
      {/* <UseCallback /> */}

      {/* useRef */}
      {/* <UseRef /> */}

      {/* context(not a hook) */}
      <ContextAPI />
    </div>
  );
};

export default App;
