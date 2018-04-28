import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import styles from "./PageHeaderLayout.less";

export default props => {
  const { children, wrapperClassName, top, ...restProps } = props;
  return (
    <div style={{ margin: "-24px -24px 0" }} className={wrapperClassName}>
      {top}
      <PageHeader {...restProps} linkElement={Link} />
      {children ? <div className={styles.content}>{children}</div> : null}
    </div>
  );
};
