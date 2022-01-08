import React from "react";
import { useState } from "react";

// Create a component CommentForm which should allow a user to input their name and comment, and then add this comment to the list. Behaviour should include:

// On pressing the button, a comment should be added to the list
// If the comment is empty, do not add it
// Provide a default username
// After a comment is added, clear the comment field but not the username

function CommentForm({ addComment }) {
  const [inputText, updateInputText] = useState("");
  const [inputAuthor, updateInputAuthor] = useState("Anon");

  function handleTextChange(e) {
    updateInputText(e.target.value);
  }

  function handleAuthorChange(e) {
    updateInputAuthor(e.target.value);
  }

  function handleSubmit(e) {
    if (!inputText) {
      alert("The text field cannot be empty. Please try again.");
      return;
    }
    addComment(inputText, inputAuthor);
    updateInputText("");
    e.preventDefault();
  }

  return (
    <>
      <div className="commentForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="author">
            <input
              type="text"
              value={inputAuthor}
              onChange={handleAuthorChange}
              name="author"
              className="commentForm__author"
              placeholder={inputAuthor}
            />
          </label>
          <label htmlFor="input">
            <input
              type="text"
              value={inputText}
              onChange={handleTextChange}
              name="input"
              className="commentForm__input"
              placeholder="Write a response..."
            />
          </label>
          <button>Submit!</button>
        </form>
      </div>
    </>
  );
}

export default CommentForm;
