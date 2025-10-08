import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import {posts} from "../data/postsData";

const Posts = () => {
  return (
    <Layout title="Blank Page - Africa Access Water">
      {/* Spacer to prevent navbar overlap */}
        <div
          style={{
            paddingTop: window.innerWidth < 768 ? '95px' : '130px',
            backgroundColor: '#001d23',
          }}
        > 
        </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Posts;
