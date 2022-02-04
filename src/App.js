import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [resource, setResource] = useState("post");
  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setResource("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResource("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResource("comments");
          }}
        >
          Comments
        </button>
      </div>
      <h1>{resource}</h1>
    </>
  );
}

export default App;
