import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Share Your
            <span> Story.</span>
          </h1>

          <p>Write, share and discover interesting ideas with OpenPages.</p>

          <div className="hero-buttons">
            <Link to="/blogs" className="primary-btn">
              Explore Blogs
            </Link>

            <Link to="/add-blog" className="secondary-btn">
              Write a Blog
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why OpenPages?</h2>

        <div className="feature-container">
          <div className="feature">
            <h3>✍️ Write</h3>
            <p>Create and publish your own blog posts.</p>
          </div>

          <div className="feature">
            <h3>📖 Read</h3>
            <p>Discover interesting stories and ideas.</p>
          </div>

          <div className="feature">
            <h3>🚀 Share</h3>
            <p>Share your knowledge with others.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
