import React from "react";

export function Comment({ author, text }) {
  //   const name = "Ben Lee";
  //   const splitName = name.split(" ");
  //   const firstName = splitName[0];
  //   const lastName = splitName[1];
  
  return (
    <>
      <div className="comment">
        <p>{author}</p>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Comment;
