import React from "react";
import "./App.css";
import { posts, sampleComments } from "../../libs/data";
import { useState } from "react";
import BlogPost from "../BlogPost/index";
import CommentList from "../CommentList/index";

function App() {
  const [blogPosts, setBlogPosts] = useState(posts);
  const [comments, updateComments] = useState(sampleComments);

  function addComment(text, author) {
    updateComments(text, author);
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
      {comments.map((comment) => {
        return <CommentList author={comment.author} text={comment.text} />;
      })}
    </div>
  );
}

export default App;
