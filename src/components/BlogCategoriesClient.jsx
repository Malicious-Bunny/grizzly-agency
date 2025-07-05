"use client";

import { useState } from "react";
import BlogCategories from "@/components/BlogCategories";
import BlogGrid from "@/components/BlogGrid";
import { getBlogPostsByCategory } from "@/data/blogPosts";

const BlogCategoriesClient = ({ categories, allPosts, className }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? allPosts
    : getBlogPostsByCategory(selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <BlogCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        className={className}
      />
      <BlogGrid posts={filteredPosts} />
    </>
  );
};

export default BlogCategoriesClient;
