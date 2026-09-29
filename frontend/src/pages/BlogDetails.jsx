import { Link, useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: "Getting Started with React",
      author: "Aditya",
      date: "29 September 2026",
      content:
        "React is a popular JavaScript library used for building modern user interfaces. It allows developers to create reusable components. React uses components, props and state to create dynamic applications.",
    },

    {
      id: 2,
      title: "Why Learn Web Development?",
      author: "Aditya",
      date: "28 September 2026",
      content:
        "Web development is an important skill in today's digital world. Learning HTML, CSS, JavaScript and React can help you build powerful applications.",
    },

    {
      id: 3,
      title: "Understanding JavaScript",
      author: "Aditya",
      date: "27 September 2026",
      content:
        "JavaScript is a programming language that makes websites interactive and dynamic. It is widely used in modern web applications.",
    },
  ];

  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return (
      <div className="page">
        <h1>Blog Not Found</h1>
        <Link to="/blogs">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <article className="blog-details">
        <p className="blog-date">{blog.date}</p>

        <h1>{blog.title}</h1>

        <p className="author">Written by {blog.author}</p>

        <div className="blog-content">
          <p>{blog.content}</p>
        </div>

        <div className="details-buttons">
          <Link to="/blogs" className="secondary-btn">
            ← Back to Blogs
          </Link>

          <Link to={`/edit-blog/${blog.id}`} className="edit-btn">
            Edit Blog
          </Link>
        </div>
      </article>
    </div>
  );
}

export default BlogDetails;
