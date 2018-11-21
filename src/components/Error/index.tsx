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
        <h1>由于未知的错误，页面崩溃了~~~~</h1>
      );
    }
    return this.props.children;
  }
}
