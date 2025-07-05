import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our delivery process ensures seamless deployment and launch of your{" "}
          <strong className="font-semibold text-neutral-950">
            solution
          </strong>
          . We handle everything from server configuration to domain setup,
          ensuring zero downtime and optimal performance from day one.
        </p>
        <p>
          Before launch, every{" "}
          <strong className="font-semibold text-neutral-950">feature</strong>{" "}
          undergoes rigorous testing including automated testing suites,
          performance optimization, and security audits. Our QA process ensures
          that your application meets the highest standards of quality and reliability.
        </p>
        <p>
          Post-launch, we provide comprehensive{" "}
          <strong className="font-semibold text-neutral-950">
            training
          </strong>{" "}
          and documentation, along with ongoing{" "}
          <strong className="font-semibold text-neutral-950">
            support
          </strong>{" "}
          to ensure your team can effectively manage and maintain the solution.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Quality Assurance">
          Comprehensive testing including automated test suites, performance
          testing, security audits, and cross-platform compatibility validation.
        </ListItem>
        <ListItem title="Cloud Infrastructure">
          Enterprise-grade hosting on AWS, Azure, or Google Cloud with auto-scaling,
          monitoring, and backup systems for maximum reliability and performance.
        </ListItem>
        <ListItem title="Ongoing Support">
          24/7 monitoring, regular updates, security patches, and dedicated support
          to ensure your solution continues to perform at its peak.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
