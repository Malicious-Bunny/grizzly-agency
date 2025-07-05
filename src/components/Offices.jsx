import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Brandenburg, Germany" invert={invert}>
          Universitätsstr. 4
          <br />
          Brandenburg, CB 03046 Germany
          <br />
          +49 15510 937316
        </Office>
      </li>
      <li>
        <Office name="Remote Services" invert={invert}>
          Serving clients worldwide
          <br />
          Available 24/7 for support
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
