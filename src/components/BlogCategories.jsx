"use client";

import { useState } from "react";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";

const BlogCategories = ({ categories, selectedCategory, onCategoryChange, className }) => {
  return (
    <Container className={clsx("mt-16", className)}>
      <FadeIn>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => onCategoryChange("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === "All"
                ? "bg-neutral-950 text-white"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-neutral-950 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </FadeIn>
    </Container>
  );
};

export default BlogCategories;
