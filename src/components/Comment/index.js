import React from "react";
import "./index.css";

export function Comment({ author, text }) {
  //   const name = "Ben Lee";
  //   const splitName = name.split(" ");
  //   const firstName = splitName[0];
  //   const lastName = splitName[1];

  return (
    <>
      <div className="comment">
        <p className="comment--author">{author}</p>
        <p className="comment--text">{text}</p>
      </div>
    </>
  );
}

export default Comment;
