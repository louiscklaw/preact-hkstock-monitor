import {Component } from 'preact';

import {styled} from 'baseui';

import { Button } from "baseui/button";

export default () => {
  return (
    <div>
      <Button onClick={() => alert("click")}>Hello</Button>
    </div>
  );
}