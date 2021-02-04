import React from "react";
import { NameBoxChild } from "./Child";

export interface ParentProps {
  isAdmin?: boolean;
}

export interface ParentState {
  name?: string;
  age: number;
}

export class Parent extends React.Component<ParentProps, ParentState> {
  private m_ref: any | undefined = undefined;

  constructor(props: ParentProps) {
    super(props);

    this.state = { name: "", age: 20 };

    this.onAgeChanged = this.onAgeChanged.bind(this);
  }

  async componentDidMount() {
    const age = await this.getAgeFromServer();
    this.setState({
      age,
    });
  }

  private getAgeFromServer(): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const db = 42;
        resolve(db);
      }, 4000);
    });
  }

  private onAgeChanged(e: any): void {
    this.setState({
      age: +(e.target as any).value,
    });
  }

  render() {
    // console.log(new Date());
    return (
      <div>
        <h3>{this.props.isAdmin ? "ADMIN" : "STANDARD"}</h3>
        <NameBoxChild
          name={this.state.name || ""}
          onNameChanged={(name: string) => {
            this.setState({
              name,
            });
          }}
        />
        Age:
        <input
          type={"number"}
          value={this.state.age}
          onChange={this.onAgeChanged}
        />
        <button
          onClick={() => this.setState((state) => ({ age: state.age + 1 }))}
        >
          Increase Age
        </button>
        <form
          onSubmit={() => {
            if (!!this.m_ref) {
              alert(this.m_ref.value);
              // this.m_ref.exportToPDF()
            }
          }}
        >
          <textarea ref={(r) => (this.m_ref = r)} />
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}
