import React from "react";

export function Comment({ author, text }) {
  //   const name = "Ben Lee";
  //   const splitName = name.split(" ");
  //   const firstName = splitName[0];
  //   const lastName = splitName[1];

  return (
    <div class="comment">
      {/* <div class="comment__avatar">
        {(firstName, lastName)} */}
      {/* We will need to render the avatar in such a way that it represents
          the first initial of both the author's first and last name
          Functionality will be needed to extract the two letters and render it in
          a div
          Using CSS, the div can be styled to represent a circle etc */}
      {/* </div> */}
      <p>{author}</p>
      <p>{text}</p>
    </div>
  );
}

export default Comment;
