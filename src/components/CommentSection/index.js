import React from "react";
import { useState } from "react";
import { sampleComments } from "../../libs/data";
import CommentForm from "../CommentForm/index";
import CommentList from "../CommentList/index";

function CommentSection() {
  const [comments, updateComments] = useState(sampleComments);
  function addComment(textInput, authorInput) {
    updateComments([...comments, { text: textInput, author: authorInput }]);
  }
  return (
    <div>
      <CommentForm addComment={addComment} />
      {comments.map((comment) => {
        return <CommentList author={comment.author} text={comment.text} />;
      })}
    </div>
  );
}

export default CommentSection;
