import React from "react";
import { Col, Row } from "antd";

import AppLayout from "layouts/App";

import BrannTitle from "components/ui/typo/Title";
import CustomerTimeTracer from "components/overview/TimeTracer";

export default function Overview() {
  return (
    <AppLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Row justify="space-between" align="bottom">
            <Col>
              <BrannTitle text="Hola!" />
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ textAlign: "center" }}>
          <CustomerTimeTracer />
        </Col>
      </Row>
    </AppLayout>
  );
}
