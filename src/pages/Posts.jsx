import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import CONFIG from "../config";
import { Helmet } from "react-helmet";

const API_BASE = CONFIG.apiBaseUrl;

const FILTERS = ["All", "Article", "News", "Blog"];

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetch(`${API_BASE}/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        const arr = Array.isArray(data) ? data : [];
        setPosts(arr);
        setFeaturedPost(arr.length ? arr[0] : null);
      })
      .catch(() => {
        if (!mounted) return;
        setPosts([]);
        setFeaturedPost(null);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => (mounted = false);
  }, []);

  const filteredPosts =
    filter === "All"
      ? posts
      : posts.filter((p) => p.type.toLowerCase() === filter.toLowerCase());

  if (loading)
    return (
      <Layout title="Posts - Africa Access Water">
        <div className="text-center mt-5">Loading posts...</div>
      </Layout>
    );

  if (!posts.length)
    return (
      <Layout title="Posts - Africa Access Water">
        <div className="container mt-5">
          <h1>Posts</h1>
          <p>No posts found.</p>
        </div>
      </Layout>
    );

  return (


    <>
      <Helmet>
        <title>Posts | Africa Access Water</title>
        <meta
          name="description"
          content="Support our clean water projects through your generous donations."
        />
        <meta property="og:title" content="Donate to Africa Access Water" />
        <meta
          property="og:description"
          content="Your support brings clean, safe water to those in need."
        />
        <meta property="og:image" content="/images/og-donate.jpg" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <Layout title="Posts - Africa Access Water">
        {/* Spacer to prevent navbar overlap */}
        <div
          style={{
            paddingTop: window.innerWidth < 768 ? '95px' : '130px',
            backgroundColor: '#001d23',
          }}
        >
        </div>

        <div className="container-xxl mb-5 pb-5">
          <div className="container mt-5">
            <h1 className="mb-4">Posts</h1>

            {/* Filters */}
            <div className="mb-4">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`btn me-2 mb-2 ${filter === f ? "btn-primary" : "btn-outline-primary"
                    }`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="row">
              {/* Featured post */}
              {featuredPost && (
                <div className="col-lg-8 mb-4">
                  <div className="card shadow-lg">
                    <img
                      src={featuredPost.image_url}
                      alt={featuredPost.title}
                      className="card-img-top"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <small className="text-muted text-uppercase">
                        {featuredPost.type}
                      </small>
                      <h2 className="card-title mt-2">{featuredPost.title}</h2>
                      <p className="card-text">{featuredPost.content}</p>
                      <small className="text-muted">
                        {new Date(featuredPost.created_at).toLocaleDateString()}
                      </small>
                    </div>
                  </div>
                </div>
              )}

              {/* Latest posts */}
              <div className="col-lg-4">
                {filteredPosts
                  .filter((post) => post.id !== featuredPost?.id)
                  .map((post) => (
                    <div
                      key={post.id}
                      className="cursor-pointer"
                      onClick={() => setFeaturedPost(post)}
                    >
                      <PostCard
                        title={post.title}
                        content={
                          post.content.length > 60
                            ? post.content.slice(0, 60) + "..."
                            : post.content
                        }
                        img={post.image_url}
                        type={post.type}
                        date={new Date(post.created_at).toLocaleDateString()}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Posts;
