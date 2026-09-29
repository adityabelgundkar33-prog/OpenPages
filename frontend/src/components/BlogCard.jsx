import { Link } from "react-router-dom";

function BlogCard({ blog, onDelete }) {
  return (
    <div className="blog-card">
      <div className="blog-card-content">
        <span className="blog-date">
          {new Date(blog.date).toLocaleDateString()}
        </span>

        <h2>{blog.title}</h2>

        <p className="author">By {blog.author}</p>

        <p className="description">
          {blog.content.length > 120
            ? blog.content.substring(0, 120) + "..."
            : blog.content}
        </p>

        <div className="card-buttons">
          <Link to={`/blogs/${blog.id}`} className="read-btn">
            Read More
          </Link>

          <Link to={`/edit-blog/${blog.id}`} className="edit-btn">
            Edit
          </Link>

          <button onClick={() => onDelete(blog.id)} className="delete-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
