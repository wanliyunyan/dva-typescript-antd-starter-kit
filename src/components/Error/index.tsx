import React, { PureComponent } from "react";

interface State {
  error: boolean;
  info: any;
}

export default class Index extends PureComponent<any, State> {
  public constructor(props) {
    super(props);
    this.state = { error: false, info: "" };
  }

  public componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  public render() {
    const { children } = this.props;
    const { error, info } = this.state;

    if (error) {
      return process.env.NODE_ENV === "development" ? (
        <>
          <h1>{error.toString()}</h1>
          <p>{info.toString()}</p>
        </>
      ) : (
        <h1>The page crashed due to an unknown error~~~~</h1>
      );
    }
    return children;
  }
}
