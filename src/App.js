import { useState, useEffect } from "react";

import Post from "./Post";

const App = ({ initialCount }) => {
  // useState hook
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

  const removePosts = () => {
    setPosts([]);
  };

  // useEffect hook
  useEffect(() => {
    // console.log("change on state");
  }, [state]);

  useEffect(() => {
    // console.log("change on posts");
  }, [posts]);

  useEffect(() => {
    // console.log("MOUNTED");
  }, []);

  const { user, count } = state;
  return (
    <div>
      <h1>{user}</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setState({ ...state, count: count + 1 })}>
        Add one +1
      </button>
      <button onClick={restOne}>Rest one -1</button>
      <button onClick={() => setState({ ...state, count: initialCount })}>
        RESET
      </button>

      <hr />

      {posts.map((item, i) => (
        <Post item={item} key={i} />
      ))}

      <button onClick={addOnePost}>Add one more</button>
      <button onClick={removePosts}>Remove posts</button>
    </div>
  );
};

export default App;
