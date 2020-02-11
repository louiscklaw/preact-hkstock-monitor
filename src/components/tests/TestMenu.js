import {Component } from 'preact';
import { StatefulMenu } from "baseui/menu";

const styled={
  position: 'absolute'
};

export default () => {
  return (
    <div style={styled}>
      <StatefulMenu
        items={[
          { label: "Item One" },
          { label: "Item Two" },
          { label: "Item Three" },
          { label: "Item Four" }
        ]}
      />
    </div>
  );
}