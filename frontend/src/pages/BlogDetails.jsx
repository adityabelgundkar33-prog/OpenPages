import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogById } from "../api/blogApi";

function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlogById(id);
        setBlog(response.data);
      } catch (error) {
        console.error(error);
        setError("Blog not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="page">
        <h1>Loading blog...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h1>{error}</h1>

        <Link to="/blogs" className="read-btn">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="blog-details">
        <span className="blog-date">
          {new Date(blog.date).toLocaleDateString()}
        </span>

        <h1>{blog.title}</h1>

        <p className="author">By {blog.author}</p>

        <div className="blog-content">
          <p>{blog.content}</p>
        </div>

        <Link to="/blogs" className="read-btn">
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}

export default BlogDetails;
