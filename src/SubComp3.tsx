import React, { useCallback, useMemo } from "react";

export const SubComp3 = (props: any) => {
  const space = props.getSpace();

  const factor = useMemo(() => {
    return factorialize(space);
  }, [space]);

  const b = 4;

  const multiply = useCallback(
    (a: number) => {
      return a * b;
    },
    [b]
  );

  const c = multiply(factor);
  console.log({ a: factor, b, c });

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
      <span style={{ display: "inline-block", paddingLeft: 10 }}>
        {factor.toFixed(0)}
      </span>
    </div>
  );
};

function factorialize(num: number): number {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
