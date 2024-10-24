import React from "react";

export default function BrannPaper({ width, children, marginTop = 0 }) {
  return (
    <div style={{ marginTop, width }} className="brann-paper">
      {children}
    </div>
  );
}
