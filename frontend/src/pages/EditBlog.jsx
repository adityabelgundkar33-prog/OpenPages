import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("Getting Started with React");

  const [author, setAuthor] = useState("Aditya");

  const [content, setContent] = useState(
    "React is a popular JavaScript library used for building modern user interfaces.",
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      id,
      title,
      author,
      content,
    });

    alert("Blog updated successfully!");

    navigate("/blogs");
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h1>Edit Blog</h1>

        <p>Update your blog information.</p>

        <form onSubmit={handleSubmit}>
          <label>Blog Title</label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Author</label>

          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label>Blog Content</label>

          <textarea
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button type="submit" className="primary-btn full-btn">
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;
