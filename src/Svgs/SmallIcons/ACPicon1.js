import * as React from "react";

function ACPicon1(props) {
  return (
    <svg width="2em" height="2em" viewBox="0 0 41 41" fill="none" {...props}>
      <rect x={0.04} y={0.5} width={40} height={40} rx={6} fill="#E9F2FE" />
      <path
        d="M30.84 32.5H9.24c-.663 0-1.2-.597-1.2-1.333V21.149c0-.385.15-.752.411-1.005l4.39-4.251v-6.06c0-.736.536-1.333 1.2-1.333h16.8c.662 0 1.2.597 1.2 1.333v21.334c0 .736-.538 1.333-1.2 1.333zm-14.4-2.667h3.6v-8.077l-4.8-4.65-4.8 4.65v8.077h3.6V24.5h2.4v5.333zm6 0h7.2V11.167h-14.4v2.836c.281 0 .563.11.789.328l6 5.813a1.4 1.4 0 01.411 1.005v8.684zm2.4-10.666h2.4v2.666h-2.4v-2.666zm0 5.333h2.4v2.667h-2.4V24.5zm0-10.667h2.4V16.5h-2.4v-2.667zm-4.8 0h2.4V16.5h-2.4v-2.667z"
        fill="#3853C3"
      />
    </svg>
  );
}

const MemoACPicon1 = React.memo(ACPicon1);
export default MemoACPicon1;
