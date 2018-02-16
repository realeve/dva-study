import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.css";
import { Button } from "antd";

const IndexPage = ({ products, dispatch }) => {
  const addItem = name => {
    dispatch({
      type: "products/add",
      payload: name
    });
  };

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">
            Getting Started
          </a>
        </li>
        <li>
          <a href="/#/products">点击这里</a>查看路由
        </li>
      </ul>
      <ul className={styles.list}>
        {products.map(item => (
          <li key={item.id}>
            <span>
              {item.id}.{item.name}
            </span>
          </li>
        ))}
      </ul>
      <Button onClick={() => addItem("test Text")}>增加数据</Button>
    </div>
  );
};

IndexPage.propTypes = {};

export default connect(({ products }) => ({
  products
}))(IndexPage);
