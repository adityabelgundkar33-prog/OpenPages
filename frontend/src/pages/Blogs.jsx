import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getBlogs, deleteBlog } from "../api/blogApi";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBlogs = async () => {
    try {
      const response = await getBlogs();
      setBlogs(response.data);
    } catch (error) {
      console.error(error);
      setError("Unable to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?",
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteBlog(id);

      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete blog.");
    }
  };

  if (loading) {
    return (
      <div className="page">
        <h1>Loading blogs...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>All Blogs</h1>
        <p>Explore our latest stories and ideas.</p>
      </div>

      {blogs.length === 0 ? (
        <div className="empty-message">
          <h2>No blogs available</h2>
          <p>Create your first blog!</p>
        </div>
      ) : (
        <div className="blog-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Blogs;
