import React from "react";
import "./App.css";
import { posts, sampleComments } from "../../libs/data";
import { useState } from "react";
import BlogPost from "../BlogPost/index";
import CommentList from "../CommentList/index";
import CommentForm from "../CommentForm/index";

function App() {
  const [blogPosts, setBlogPosts] = useState(posts);
  const [comments, updateComments] = useState(sampleComments);

  function addComment(textInput, authorInput) {
    updateComments([...comments, { text: textInput, author: authorInput }]);
  }

  return (
    <div className="App">
      <BlogPost
        title={blogPosts.title}
        author={blogPosts.author}
        datePosted={blogPosts.datePosted}
        image={blogPosts.image}
        alt={blogPosts.alt}
        text={blogPosts.text}
      />
      <CommentForm addComment={addComment} />
      {comments.map((comment) => {
        return <CommentList author={comment.author} text={comment.text} />;
      })}
    </div>
  );
}

export default App;
