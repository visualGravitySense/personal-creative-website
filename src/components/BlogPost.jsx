import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./BlogPost.css"; // Custom styling if necessary

const BlogPost = () => {
  const { postId } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    // Dynamically import the markdown file based on the route param
    import(`../posts/${postId}.md`)
      .then((res) => {
        fetch(res.default)
          .then((response) => response.text())
          .then((text) => setContent(text));
      })
      .catch((err) => console.error(err));
  }, [postId]);

  return (
    <div className="blog-post">
      {content ? <ReactMarkdown>{content}</ReactMarkdown> : <p>Loading...</p>}
    </div>
  );
};

export default BlogPost;
