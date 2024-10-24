import { Avatar, Col, Row } from "antd";
import React from "react";
import BrannText from "../typo/Text";

const BrannUserProfile = ({ firstName, lastName }) => {
  return (
    <Row align={"top"} gutter={12}>
      <Col>
        <Avatar size={"small"}>{`${firstName.charAt(0)}${lastName.charAt(
          0
        )}`}</Avatar>
      </Col>
      <Col>
        <BrannText text={`${firstName} ${lastName}`} />
      </Col>
    </Row>
  );
};

export default BrannUserProfile;
