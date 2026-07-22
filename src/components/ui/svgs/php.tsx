import type { SVGProps } from "react";

const Php = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 512 512"
  >
    <ellipse cx="256" cy="256" rx="250" ry="150" fill="#8892bf" />
    <ellipse cx="256" cy="256" rx="230" ry="132" fill="#777bb3" />
    <path
      fill="#fff"
      d="M144 210h48c26 0 44 6 53 18 9 12 11 30 6 52-5 20-15 34-30 44-15 10-33 15-56 15H140l-10 46H92l38-175zm26 26-14 66h20c15 0 27-3 35-9 8-6 13-15 16-27 3-11 2-19-3-25-5-6-16-9-32-9z"
    />
    <path
      fill="#fff"
      d="M282 165h35l-10 45h32c20 0 34 4 42 11 8 8 10 19 6 34l-13 60h-36l12-56c2-9 1-15-3-19-4-4-11-6-22-6h-27l-17 81h-36zM432 210h48c26 0 44 6 53 18 9 12 11 30 6 52-5 20-15 34-30 44-15 10-33 15-56 15h-25l-10 46h-38l38-175zm26 26-14 66h20c15 0 27-3 35-9 8-6 13-15 16-27 3-11 2-19-3-25-5-6-16-9-32-9z"
    />
  </svg>
);

export { Php };