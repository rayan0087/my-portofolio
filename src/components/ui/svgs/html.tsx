import type { SVGProps } from "react";

const Html = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 512 512"
  >
    <path fill="#E34F26" d="M71 460L30 0h451l-41 460-185 52" />
    <path fill="#EF652A" d="M256 472l149-41 35-394H256" />
    <path
      fill="#EBEBEB"
      d="M256 208H181l-5-58h80V94H114l15 171h127zM256 355l-64-17-4-45h-60l7 89 121 32z"
    />
    <path
      fill="#FFF"
      d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zM255 94v56h137l5-56z"
    />
  </svg>
);

export { Html };
