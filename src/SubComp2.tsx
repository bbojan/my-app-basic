import React from "react";

export const SubComp2 = (props: any) => {
  return (
    <div>
      <span style={{ display: "inline-block", paddingRight: 10 }}>left</span>
      <span style={{ display: "inline-block" }}>{props.children(44)}</span>
      <span style={{ display: "inline-block", paddingLeft: 10 }}>right</span>
    </div>
  );
};
