import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <PostCard title="Sample Post" description="This is a sample post description." />
      </main>
      <Footer />
    </>
  );
};

export default PostsPage;
