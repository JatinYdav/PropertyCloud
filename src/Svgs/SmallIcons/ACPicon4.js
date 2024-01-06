import * as React from "react";

function ACPicon4(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" {...props}>
      <rect width={40} height={40} rx={6} fill="#E9F2FE" />
      <path
        d="M18.945 8l11.423 1.632L32 21.055 21.393 31.662c-.45.45-1.181.45-1.632 0L8.338 20.24a1.154 1.154 0 010-1.632L18.945 8zm3.264 9.791a2.308 2.308 0 103.264-3.264 2.308 2.308 0 00-3.264 3.264z"
        fill="#3853C3"
      />
    </svg>
  );
}

const MemoACPicon4 = React.memo(ACPicon4);
export default MemoACPicon4;
