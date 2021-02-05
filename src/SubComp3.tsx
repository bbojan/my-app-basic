import React from "react";

export const SubComp3 = (props: any) => {
  const space = props.getSpace();
  return (
    <div>
      <span style={{ display: "inline-block", paddingRight: 10 }}>left</span>
      <span style={{ display: "inline-block" }}>
        {props.renderMiddle("BEFORE")}
      </span>
      <span style={{ margin: space }}></span>
      <span style={{ display: "inline-block" }}>
        {props.renderMiddle("AFTER")}
      </span>
      <span style={{ display: "inline-block", paddingLeft: 10 }}>right</span>
    </div>
  );
};
