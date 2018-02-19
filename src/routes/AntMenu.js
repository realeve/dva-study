import React from "react";
import { connect } from "dva";
import AntMenu from "../components/AntMenu";

// const Products = props => <h2>List of Products</h2>;
const Antmenu = ({ dispatch, products }) => {
  //   const handleDelete = id => dispatch({ type: "products/delete", payload: id });
  return <Antmenu />;
};

export default connect()(AntMenu);
