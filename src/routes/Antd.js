import React, { Component } from "react";
import { connect } from "dva";

import { Button, Radio, Icon, Row, Col } from "antd";
import styles from "./Antd.less";

class Antd extends Component {
  state = {
    loading: true,
    style: {
      col: {
        height: 40,
        backgroundColor: "rgba(0, 160, 233, 0.7)",
        color: "#eee"
      }
    }
  };
  toggleLoading = () => {
    this.setState(prevState => ({
      loading: !prevState.loading
    }));
  };
  render() {
    const style = this.state.style;
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
        <Row gutter={24} style={{ marginTop: 20 }}>
          <Col span={6}>
            <div style={style.col}> col-6 </div>
          </Col>
          <Col span={6}>
            <div style={style.col}> col-6 </div>
          </Col>
          <Col span={6}>
            <div style={style.col}> col-6 </div>
          </Col>
          <Col span={6}>
            <div style={style.col}> col-6 </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(Antd);
