import * as React from "react";
import { StatefulMenu } from "baseui/menu";

const styled={
  position: 'absolute'
};

export default ({menu_content}) => {
  return (
    <div style={styled}>
      <StatefulMenu
        items={menu_content}
      />
    </div>
  );
}