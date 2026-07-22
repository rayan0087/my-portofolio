import type { SVGProps } from "react";

const Odoo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 512 512"
  >
    <circle cx="105" cy="256" r="90" fill="#8f8f8f" />
    <circle cx="105" cy="256" r="65" fill="#fff" />
    <circle cx="256" cy="150" r="90" fill="#8f8f8f" />
    <circle cx="256" cy="150" r="65" fill="#fff" />
    <circle cx="256" cy="150" r="42" fill="#8f8f8f" />
    <circle cx="407" cy="256" r="90" fill="#8f8f8f" />
    <circle cx="407" cy="256" r="65" fill="#fff" />
    <circle cx="256" cy="360" r="90" fill="#714b67" />
    <circle cx="105" cy="256" r="42" fill="#714b67" />
    <circle cx="407" cy="256" r="42" fill="#714b67" />
  </svg>
);

export { Odoo };