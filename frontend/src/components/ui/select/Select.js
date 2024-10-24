import { Select } from "antd";
import React from "react";

export default function BrannSelect({ options, onChange, ...rest }) {
  return (
    <Select
      size="large"
      onChange={onChange}
      options={options}
      style={{ width: 250 }}
      {...rest}
    />
  );
}
