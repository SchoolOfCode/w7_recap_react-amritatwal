import React from "react";
import "./App.css";
import { posts } from "../../libs/data";
import { useState } from "react";
import BlogPost from "../BlogPost/index";
import CommentSection from "../CommentSection/index";

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
      <CommentSection />
    </div>
  );
}

export default App;
