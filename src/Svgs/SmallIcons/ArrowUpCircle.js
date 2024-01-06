import * as React from "react";

function ArrowUpCircle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 27 28" fill="none" {...props}>
      <path
        d="M14.57 10.178v-.001a1.512 1.512 0 00-2.14 0v.001L7.75 14.884a1.45 1.45 0 00-.448 1.06c0 .392.14.779.443 1.083h0l.006.005a1.506 1.506 0 002.136-.022l3.612-3.625 3.612 3.625a1.506 1.506 0 002.142.017 1.495 1.495 0 00-.003-2.14l-4.68-4.709zM13.5 27c-7.163 0-13-5.825-13-13 0-7.162 5.838-13 13-13 7.175 0 13 5.837 13 13 0 7.176-5.824 13-13 13z"
        fill="#3853C3"
        stroke="#000"
      />
    </svg>
  );
}

const MemoArrowUpCircle = React.memo(ArrowUpCircle);
export default MemoArrowUpCircle;
