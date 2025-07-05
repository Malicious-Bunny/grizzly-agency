import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{" "}
          <strong className="font-semibold text-neutral-950">vision</strong> and
          business objectives, conducting thorough discovery sessions to identify
          opportunities and potential challenges before development begins.
        </p>
        <p>
          Our team performs comprehensive technical audits, competitive analysis,
          and user research to ensure we build solutions that not only meet current
          needs but scale for future growth. We analyze existing{" "}
          <strong className="font-semibold text-neutral-950">systems</strong>,
          identify integration requirements, and assess technical debt.
        </p>
        <p>
          Every project begins with a detailed{" "}
          <strong className="font-semibold text-neutral-950">roadmap</strong> that
          outlines milestones, timelines, and success metrics, ensuring complete
          transparency and alignment with your business goals.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Technical architecture review</TagListItem>
        <TagListItem>User experience research</TagListItem>
        <TagListItem>Competitive analysis</TagListItem>
        <TagListItem>Project roadmapping</TagListItem>
        <TagListItem>Risk assessment</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
