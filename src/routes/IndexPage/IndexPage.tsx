import * as React from "react";
import styles from "./IndexPage.less";

const Index = function () {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>dva-typescript-antd-starter-kit</h1>
      <div className={styles.welcome} />
    </div>
  );
};

export default Index;
