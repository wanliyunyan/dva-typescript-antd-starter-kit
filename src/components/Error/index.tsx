import React, { Fragment, PureComponent } from "react";

interface IProps {}

interface IState {
  error: boolean;
  info: any;
}

export default class Index extends PureComponent<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { error: false, info: "" };
  }
  public componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  public render() {
    if (this.state.error) {
      return process.env.NODE_ENV === "development" ? (
        <Fragment>
          <h1>{this.state.error.toString()}</h1>
        </Fragment>
      ) : (
        <h1>The page crashed due to an unknown error~~~~</h1>
      );
    }
    return this.props.children;
  }
}
