import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Using modern development methodologies and cutting-edge technologies, we
          transform your vision into scalable, maintainable solutions. Our agile
          approach ensures continuous feedback and rapid iteration throughout the
          development cycle.
        </p>
        <p>
          Each project is led by a dedicated project manager who maintains transparent
          communication and provides regular updates. Our development team follows
          industry best practices including automated testing, code reviews, and
          continuous integration to ensure the highest quality deliverables.
        </p>
        <p>
          We believe in collaborative development, providing clients with access to
          staging environments and regular demos to ensure the final product exceeds
          expectations and aligns perfectly with business objectives.
        </p>
      </div>
      <Blockquote
        author={{ name: "Sarah Mitchell", role: "CTO of TechFlow Solutions" }}
        className="mt-12"
      >
        Grizzly Agency's development process is incredibly transparent and efficient.
        Their regular updates and collaborative approach made us feel like true partners
        throughout the entire project.
      </Blockquote>
    </Section>
  );
};

export default Build;
