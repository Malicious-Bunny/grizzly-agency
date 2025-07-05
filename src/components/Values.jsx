import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Excellence through innovation and integrity"
      >
        <p>
          We believe that exceptional technology solutions are built on a foundation
          of strong values. Every decision we make, from technology choices to client
          relationships, is guided by our commitment to excellence and ethical practices.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Excellence">
            We maintain the highest standards in every aspect of our work, from code
            quality to user experience, ensuring that every solution we deliver exceeds
            expectations and stands the test of time.
          </GridListItem>
          <GridListItem title="Innovation">
            We stay at the forefront of technology trends, continuously exploring new
            frameworks, tools, and methodologies to deliver cutting-edge solutions that
            give our clients a competitive advantage.
          </GridListItem>
          <GridListItem title="Transparency">
            Open communication is fundamental to our partnerships. We provide regular
            updates, honest assessments, and clear documentation throughout every project,
            ensuring complete visibility into our process.
          </GridListItem>
          <GridListItem title="Reliability">
            Our clients depend on us to deliver on time and within budget. We take this
            responsibility seriously, building robust systems and maintaining consistent
            communication to ensure predictable outcomes.
          </GridListItem>
          <GridListItem title="Partnership">
            We view every client relationship as a long-term partnership. Our success
            is measured by your success, and we're committed to supporting your growth
            and evolution over time.
          </GridListItem>
          <GridListItem title="Security">
            In an increasingly connected world, security isn't optional. We implement
            industry-leading security practices and stay current with emerging threats
            to protect your data and your users.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
