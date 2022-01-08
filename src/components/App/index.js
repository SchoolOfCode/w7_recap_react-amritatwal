import React from "react";
import "./App.css";
import posts from "../../libs/data";
import { useState } from "react";
import BlogPost from "../BlogPost/index";
import Comment from "../Comment/index";

function App() {
  const [blogPosts, setBlogPosts] = useState(posts);
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
      <Comment />
    </div>
  );
}

export default App;
