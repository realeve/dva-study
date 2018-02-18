import React from "react";
import PropTypes from "prop-types";

import { Table, Popconfirm, Button } from "antd";

const R = require("ramda");

const ProductList = ({ onDelete, products }) => {
  const columns = [
    {
      title: "名称",
      dataIndex: "name"
    },
    {
      title: "操作",
      render: (text, record) => {
        return (
          <Popconfirm title="确定要删除?" onConfirm={() => onDelete(record.id)}>
            <Button>删除</Button>
          </Popconfirm>
        );
      }
    }
  ];

  return <Table dataSource={products} columns={columns} />;
};

const data = [
  {
    age: 15,
    name: "test"
  },
  {
    age: 22,
    name: "t2"
  }
];
const changeName = R.map(R.assoc("name", "张三"));

const dist = changeName(data);
console.log(dist);

const changeAge = R.map(R.evolve({ age: R.inc, name: R.always("ttt") }));

console.log(changeAge(data));

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

export default ProductList;
