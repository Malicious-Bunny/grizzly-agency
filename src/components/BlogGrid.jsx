import React from "react";
import Container from "./Container";
import BlogCard from "./BlogCard";
import { FadeInStagger } from "./FadeIn";

const BlogGrid = ({ posts }) => {
  return (
    <Container className="mt-24">
      <FadeInStagger>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </FadeInStagger>
    </Container>
  );
};

export default BlogGrid;
