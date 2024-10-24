import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function BrannTitle({ text, align, color, level = 2 }) {
  return (
    <Title
      level={level}
      style={{ marginTop: 0, textAlign: align, color: color }}
    >
      {text}
    </Title>
  );
}
