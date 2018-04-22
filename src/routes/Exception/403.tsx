import {Link} from "react-router-dom";
import React from "react";
import Exception from "../../components/Exception";

export default () => (
  <Exception type="403" style={{ minHeight: 500, height: "80%" }} linkElement={Link} />
);
