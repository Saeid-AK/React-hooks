import { useState } from "react";

const App = ({ initialCount }) => {
  // let [count, setCount] = useState(initialCount);
  const [state, setState] = useState({
    count: initialCount,
    user: "Saeid",
  });
  let [posts, setPosts] = useState([
    {
      name: "Super awsome post",
      body: "The content of the post",
    },
    {
      name: "JS is greate",
      body: "Es6 changes",
    },
  ]);

  const restOne = () => {
    setState({ ...state, count: state.count - 1 });
  };

  const addOnePost = () => {
    let newPost = {
      name: "React Hooks",
      body: "React hooks useState",
    };

    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>
        Add one +1
      </button>
      <button onClick={restOne}>Rest one -1</button>
      <button onClick={() => setState({ ...state, count: initialCount })}>
        RESET
      </button>

      <hr />

      {posts.map((item, i) => (
        <div key={i}>
          <div>Name: {item.name}</div>
          <div>Content: {item.body}</div>
          <hr />
        </div>
      ))}

      <button onClick={addOnePost}>Add one more</button>
    </div>
  );
};

export default App;
