import { useEffect } from "react";

const Post = ({ item }) => {
  useEffect(() => {
    console.log("post created");

    return () => {
      console.log("component exit");
    };
  }, []);

  return (
    <div>
      <div>Name: {item.name}</div>
      <div>Content: {item.body}</div>
      <hr />
    </div>
  );
};

export default Post;
