import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogById, updateBlog } from "../api/blogApi";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Get existing blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlogById(id);

        setTitle(response.data.title);
        setAuthor(response.data.author);
        setContent(response.data.content);
      } catch (error) {
        console.error(error);
        setError("Blog not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // Update blog
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author || !content) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      await updateBlog(id, {
        title,
        author,
        content,
      });

      alert("Blog updated successfully!");

      navigate("/blogs");
    } catch (error) {
      console.error(error);
      setError("Failed to update blog.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="page">
        <h1>Loading blog...</h1>
      </div>
    );
  }

  if (error && !title) {
    return (
      <div className="page">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Edit Blog</h1>
        <p>Update your blog information.</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Blog Title</label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Author</label>

            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Blog Content</label>

            <textarea
              rows="8"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-btn" disabled={saving}>
            {saving ? "Updating..." : "Update Blog"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;
