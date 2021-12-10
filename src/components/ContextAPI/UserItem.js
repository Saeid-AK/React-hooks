import React, { useContext } from "react";

import { MyContext } from "../../context";

const UserItem = () => {
  const context = useContext(MyContext);

  return (
    <div>
      {context.active
        ? context.users.map((item) => (
            <div key={item.id}>
              <div>
                {item.id}: {item.name}
              </div>
            </div>
          ))
        : null}
      <hr />
      <button onClick={context.toggleActive}>Toggle it</button>
    </div>
  );
};

export default UserItem;
