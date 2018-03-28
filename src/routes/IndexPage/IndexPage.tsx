import * as React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

function IndexPage() {

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>dva + webpack-dev-server + hot-loader + typescript + antd + axios</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>编辑 <code>src/index.js</code> 然后ctrl + s 保存实现热加载</li>
      </ul>
    </div>
  );
}

export default connect()(IndexPage);
