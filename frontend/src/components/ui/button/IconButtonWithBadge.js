import { Badge, Button } from "antd";
import React from "react";
import BrannIcon from "../typo/Icon";

export default function BrannIconButtonWithBadge({
  icon,
  badgePos = [-3, 20],
}) {
  return (
    <Badge color="#EF5A06" dot={true} offset={badgePos}>
      <Button shape="circle" icon={<BrannIcon icon={icon} size={20} />} />
    </Badge>
  );
}
