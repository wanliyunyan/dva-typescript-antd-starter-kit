import { connect } from "dva";
import * as React from "react";
import styles from "./IndexPage.less";

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>
        dva + webpack-dev-server + hot-loader + typescript + antd + axios
      </h1>
      <div className={styles.welcome} />
    </div>
  );
}

export default connect()(IndexPage);
