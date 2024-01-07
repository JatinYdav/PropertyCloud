import * as React from "react";

function ArrowDownCircle(props) {
  return (
    <svg width="1.2em" height="1em" viewBox="0 0 28 27" fill="none" {...props}>
      <path
        d="M12.47 17.322l.001.001a1.512 1.512 0 002.138 0l.001-.001 4.679-4.706a1.45 1.45 0 00.448-1.06c0-.392-.14-.779-.443-1.083h0l-.006-.006a1.506 1.506 0 00-2.136.023l-3.612 3.625-3.612-3.625a1.506 1.506 0 00-2.142-.017 1.495 1.495 0 00.003 2.14l4.681 4.709zM13.54.5c7.163 0 13 5.824 13 13 0 7.162-5.838 13-13 13-7.175 0-13-5.837-13-13 0-7.176 5.824-13 13-13z"
        fill="#19FF19"
        stroke="#000"
      />
    </svg>
  );
}

const MemoArrowDownCircle = React.memo(ArrowDownCircle);
export default MemoArrowDownCircle;
