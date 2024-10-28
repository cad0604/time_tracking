import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Col, Layout, Row } from "antd";

export default function AuthLayout({ children }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      if (user.isAdmin) {
        navigate("/administración");
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <Layout className="auth-layout">
      <Layout.Content>
        <Row className="container">
          <Col sm={24} xs={24} md={12} className="banner"></Col>
          <Col sm={24} xs={24} md={12} className="content">
            {children}
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}
