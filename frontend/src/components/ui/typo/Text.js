import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

export default function BrannText({
  text,
  align,
  color,
  fontSize = 16,
  marginTop = 0,
  ...rest
}) {
  return (
    <Text
      ellipsis
      {...rest}
      style={{
        marginTop: marginTop,
        textAlign: align,
        color: color,
        fontSize: fontSize,
      }}
    >
      {text}
    </Text>
  );
}
