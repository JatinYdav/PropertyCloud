import * as React from "react";

function MapPin(props) {
  return (
    <svg width="1.3em" height="1.3em" viewBox="0 0 20 21" fill="none" {...props}>
      <g
        clipPath="url(#prefix__clip0_66_465)"
        stroke="#000"
        strokeOpacity={0.6}
        strokeWidth={1.667}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 8.443c0 5.833-7.5 10.833-7.5 10.833s-7.5-5-7.5-10.833a7.5 7.5 0 0115 0z" />
        <path d="M10 10.943a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_66_465">
          <path fill="#fff" transform="translate(0 .11)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoMapPin = React.memo(MapPin);
export default MemoMapPin;
