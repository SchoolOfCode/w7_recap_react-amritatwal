import React from "react";

export function BlogPost({ title, author, datePosted, image, alt, text }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{author}</p>
      <time dateTime={datePosted}>{datePosted}</time>
      <figure>
        <img src={image} alt={alt} />
        <figcaption>{alt}</figcaption>
      </figure>
      <p>{text}</p>
    </article>
  );
}

export default BlogPost;
