import React from "react";

// Create a component CommentForm which should allow a user to input their name and comment, and then add this comment to the list. Behaviour should include:

// On pressing the button, a comment should be added to the list
// If the comment is empty, do not add it
// Provide a default username
// After a comment is added, clear the comment field but not the username

function CommentForm({ addComment }) {
  return (
    <>
      <div className="commentForm">
        <label for="author">
          <input
            type="text"
            value={author}
            name="author"
            className="commentForm__author"
          />
        </label>
        <label for="input">
          <input
            type="text"
            value={text}
            name="input"
            className="commentForm__input"
          />
        </label>
        <button
          onClick={() => {
            addComment(text, author);
          }}
        >
          Submit!
        </button>
      </div>
    </>
  );
}

export default CommentForm;
