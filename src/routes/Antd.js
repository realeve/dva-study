import React, { Component } from "react";
import { connect } from "dva";

import { Button, Radio, Icon } from "antd";
import styles from "./Antd.less";

class Antd extends Component {
  state = {
    loading: true
  };
  toggleLoading = () => {
    this.setState(prevState => ({
      loading: !prevState.loading
    }));
  };
  render() {
    return (
      <div className={styles.main}>
        <Button onClick={this.toggleLoading} className={styles.btn}>
          切换加载状态
        </Button>
        <Button
          icon="search"
          loading={this.state.loading}
          className={styles.btn}
          type="primary"
        >
          {this.state.loading ? "加载中" : "加载完毕"}
        </Button>
        <Button icon="search" className={styles.btn} type="dashed">
          dashed
        </Button>
        <Button icon="search" className={styles.btn} type="danger">
          danger
        </Button>
        <Button icon="search" className={styles.btn} shape="circle" />
        <Radio.Group>
          <Radio.Button value="a">a</Radio.Button>
          <Radio.Button value="b" disabled>
            b
          </Radio.Button>
          <Radio.Button value="c">c</Radio.Button>
          <Radio.Button value="d">d</Radio.Button>
        </Radio.Group>

        <Button.Group className={styles["margin-left-5"]}>
          <Button>
            <Icon type="left" />
          </Button>
          <Button type="primary">
            <Icon type="right" />
          </Button>
        </Button.Group>
      </div>
    );
  }
}

export default connect()(Antd);
