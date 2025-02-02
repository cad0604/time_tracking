import React from "react";
import { Col, Row } from "antd";
import AdminReport from "components/overview/Report";
import AdminLayout from "layouts/Admin";

export default function Overview() {
  return (
    <AdminLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <AdminReport />
        </Col>
      </Row>
    </AdminLayout>
  );
}
