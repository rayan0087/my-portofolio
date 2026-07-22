import type { SVGProps } from "react";

const Css = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 512 512"
  >
    <path fill="#1572b6" d="M71 460 30 0h452l-41 460-186 52" />
    <path fill="#33a9dc" d="M256 472V41h185l-35 394" />
    <path
      fill="#fff"
      d="m256 208-77-1-5-58 82 1V96H106l14 157h136zM256 296h-70l-5-52h-53l9 106h119z"
    />
    <path
      fill="#ebebeb"
      d="M255 208v54h71l-7 74-64 18v56l117-32 9-100 2-19h-11z"
    />
    <path fill="#fff" d="M255 296v54h64l-6 63-58 16v57l106-30 12-134z" />
  </svg>
);

export { Css };