import React from "react";
import { Col, Row } from "antd";

import AppLayout from "layouts/App";

import AdminReport from "components/overview/Report";

export default function Overview() {
  return (
    <AppLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <AdminReport />
        </Col>
      </Row>
    </AppLayout>
  );
}
