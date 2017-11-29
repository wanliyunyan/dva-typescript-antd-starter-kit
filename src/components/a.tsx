import { Button } from "antd";
import { connect } from "dva";
import * as React from "react";

const A = ({a, dispatch}: any) => {
  return (
    <div>
      <h1> { a } </h1>
      <p> fetch result from model a </p>
      <hr />
      <Button type="primary" onClick={() => { dispatch({ type: "a/create" }); }}>增</Button>
      <Button type="dashed" onClick={() => { dispatch({ type: "a/delete" }); }}>删</Button>
      <Button type="danger" onClick={() => { dispatch({ type: "a/update" }); }}>改</Button>
      <Button onClick={() => { dispatch({ type: "a/query" }); }}>查</Button>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    a: state.a,
  };
}

export default connect(mapStateToProps)(A);
