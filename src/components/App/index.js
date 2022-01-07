import React from "react";
import "./App.css";
import posts from "../../libs/data";
import { useState } from "react";
import BlogPost from ".././BlogPost/index";

function App() {
  const [blogPosts, updateBlogPosts] = useState(posts);
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
    </div>
  );
}

export default App;
