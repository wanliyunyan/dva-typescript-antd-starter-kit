import { AutoComplete, Icon, Input } from "antd";
import classNames from "classnames";
import React, { PureComponent } from "react";
import * as styles from "./index.less";

interface IProps {
  className?: any;
  placeholder?: string;
  dataSource?: [string, string, string];
  onSearch?: (value) => any;
  onPressEnter?: (value) => any;
  onChange?: () => any;
}

interface IState {
  searchMode?: any;
  value?: any;
}

export default class HeaderSearch extends PureComponent<IProps, IState> {
  public timeout: any;
  public input: any;
  public state = {
    searchMode: false,
    value: ""
  };

  public componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  public onKeyDown = e => {
    if (e.key === "Enter") {
      this.timeout = setTimeout(() => {
        this.props.onPressEnter(this.state.value);
      }, 0);
    }
  };

  public onChange = value => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  };

  public enterSearchMode = () => {
    this.setState({ searchMode: true }, () => {
      if (this.state.searchMode) {
        this.input.focus();
      }
    });
  };

  public leaveSearchMode = () => {
    this.setState({
      searchMode: false,
      value: ""
    });
  };

  public render() {
    const { className, placeholder, dataSource, ...restProps } = this.props;
    const inputClass = classNames(styles.input, {
      [styles.show]: this.state.searchMode
    });

    return (
      <span
        className={classNames(className, styles.headerSearch)}
        onClick={this.enterSearchMode}
      >
        <Icon type="search" />
        <AutoComplete
          {...restProps}
          dataSource={dataSource}
          className={inputClass}
          value={this.state.value}
          onChange={this.onChange}
        >
          <Input
            placeholder={placeholder}
            ref={node => {
              this.input = node;
            }}
            onKeyDown={this.onKeyDown}
            onBlur={this.leaveSearchMode}
          />
        </AutoComplete>
      </span>
    );
  }
}
