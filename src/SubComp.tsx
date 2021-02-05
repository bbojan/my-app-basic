import React from "react";

export const SubComp = (props: any) => {
  return (
    <div>
      <span style={{ display: "inline-block", paddingRight: 10 }}>left</span>
      <span style={{ display: "inline-block" }}>{props.children}</span>
      <span style={{ display: "inline-block", paddingLeft: 10 }}>right</span>
    </div>
  );
};
