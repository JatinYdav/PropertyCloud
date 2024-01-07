import * as React from "react";

function ACPicon1(props) {
  return (
    <svg width="1.8em" height="1.8em" viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M22.84 24.5H1.24c-.663 0-1.2-.597-1.2-1.333V13.149c0-.385.15-.752.411-1.005l4.39-4.252V1.833C4.84 1.097 5.376.5 6.04.5h16.8c.662 0 1.2.597 1.2 1.333v21.334c0 .736-.538 1.333-1.2 1.333zm-14.4-2.667h3.6v-8.077l-4.8-4.65-4.8 4.65v8.077h3.6V16.5h2.4v5.333zm6 0h7.2V3.167H7.24v2.836c.281 0 .563.11.789.328l6 5.813a1.4 1.4 0 01.411 1.005v8.684zm2.4-10.666h2.4v2.666h-2.4v-2.666zm0 5.333h2.4v2.667h-2.4V16.5zm0-10.667h2.4V8.5h-2.4V5.833zm-4.8 0h2.4V8.5h-2.4V5.833z"
        fill="#3853C3"
      />
    </svg>
  );
}

const MemoACPicon1 = React.memo(ACPicon1);
export default MemoACPicon1;
