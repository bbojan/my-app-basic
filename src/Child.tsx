import React from "react";

export interface ChildProps {
  name: string;
  onNameChanged: (name: string) => void;
}

export interface ChildState {}

export class NameBoxChild extends React.Component<ChildProps, ChildState> {
  constructor(props: ChildProps) {
    super(props);
  }

  render() {
    return (
      <p>
        Name:
        <input
          type={"text"}
          value={this.props.name}
          onChange={(e) => this.props.onNameChanged((e.target as any).value)}
        />
      </p>
    );
  }
}
