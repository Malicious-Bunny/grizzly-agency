import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Where innovation meets work-life balance"
        invert
      >
        <p>
          We believe that exceptional work comes from a team that's passionate, supported, and empowered to grow both professionally and personally.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Growth Mindset" invert>
            We invest in our team's continuous learning through conferences, courses,
            and dedicated time for exploring new technologies and methodologies.
          </GridListItem>
          <GridListItem title="Work-Life Balance" invert>
            We understand that great work comes from well-rested, fulfilled individuals.
            Flexible schedules and remote options ensure our team can do their best work.
          </GridListItem>
          <GridListItem title="Collaborative Excellence" invert>
            Every team member's voice matters. We foster an environment where ideas
            are shared freely and diverse perspectives drive innovation.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
