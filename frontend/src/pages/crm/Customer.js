import React from "react";
import { Col, Row } from "antd";
import AdminLayout from "layouts/Admin";
import CustomerTable from "components/crm/CustomerTable";

export default function CustomerPage() {
  return (
    <AdminLayout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <CustomerTable />
        </Col>
      </Row>
    </AdminLayout>
  );
}
