import {Component } from 'preact';

import { Table,Filter } from "baseui/table";

const table_content = [
  [
    "Sarah Brown",
    33,
    "100 Broadway st. New York City, New York"
  ],
  [
    "Jane Smith",
    32,
    "100 Market st. San Francisco, California"
  ]
]

const table_column_head=["Name", "Age", "Address"]

export default () => {
  return (
    <Table
      columns={table_column_head}
      data={table_content}
    />
  );
}