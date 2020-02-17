import { Component } from "react";

import AastockImg from "./AaStockImg";
import AastockImgs from "./AaStockImgs";

// import dashboard_lists from './list_config'
import dashboard_lists from "../../../config/list_config";

// let list_config = ["00939.hk","00992.hk"]

let getAaStockImgs = list_config => {
  return list_config.map(x => {
    return <AastockImgs aastock_code={x} />;
  });
};

let dashboard_style = {
  display: "grid",
  gridGap: "0px",
  gridTemplateColumns: "repeat(auto-fit, 300px)",
  // backgroundColor: 'green',
  minHeight: "80vh"
};

export default class AaStockDashboard extends Component {
  render({ list }) {
    if (Object.keys(dashboard_lists).includes(list)) {
      return (
        <div style={dashboard_style}>
          {getAaStockImgs(dashboard_lists[list])}
        </div>
      );
    } else {
      return <div>the dashboard list not found</div>;
    }
  }
}
