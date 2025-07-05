"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import StylizedImage from "./StylizedImage";
import Container from "./Container";
import FadeIn from "./FadeIn";

const WorkShowcaseItem = ({
  project,
  index,
  isImageRight = false
}) => {
  const { id, title, description, image, technologies, projectUrl, quote } = project;

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-y-0 xl:gap-x-16">
          {/* Content Section */}
          <FadeIn className={clsx(
            "lg:mx-0 lg:flex-auto lg:flex lg:items-center",
            isImageRight ? "lg:order-1" : "lg:order-2"
          )}>
            <div className="mx-auto max-w-xl lg:mx-0">
              {projectUrl ? (
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="group">
                  <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl group-hover:text-neutral-700 transition-colors duration-200 cursor-pointer">
                    {title}
                  </h2>
                </a>
              ) : (
                <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                  {title}
                </h2>
              )}
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                {description}
              </p>

              {/* Technologies */}
              {technologies && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Client Quote */}
              {quote && (
                <div className="mt-8 border-l-4 border-neutral-200 pl-6 py-4">
                  <blockquote className="text-neutral-700 italic">
                    "{quote.text}"
                  </blockquote>
                  <div className="mt-4">
                    <cite className="not-italic font-semibold text-neutral-900">
                      {quote.author}
                    </cite>
                    <p className="text-sm text-neutral-600">
                      {quote.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Image Section */}
          <FadeIn className={clsx(
            "sm:px-6 lg:px-0",
            isImageRight ? "lg:order-2" : "lg:order-1"
          )}>
            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <StylizedImage
                src={image}
                alt={title}
                shape={index % 3}
                className="w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

const WorkShowcase = ({ projects = [], className }) => {
  if (!projects.length) {
    return null;
  }

  return (
    <div className={clsx("bg-white py-16 sm:py-24", className)}>
      <div className="space-y-24 lg:space-y-32">
        {projects.map((project, index) => (
          <WorkShowcaseItem
            key={project.id || index}
            project={project}
            index={index}
            isImageRight={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;
