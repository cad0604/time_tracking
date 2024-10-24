import React from "react";
import { useDispatch } from "react-redux";

import { Layout } from "antd";

import View from "components/ui/box/View";
import { useNavigate } from "react-router-dom";
import BrannLogo from "components/common/Logo";
import BrannActiveButton from "components/ui/button/ActiveButton";

const { Header, Content } = Layout;

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickMenuItem = (key) => {
    if (key === "/loggut") {
      dispatch({
        type: "LOGOUT",
      });
    } else {
      navigate(key);
    }
  };

  return (
    <Layout className="app-layout">
      <Layout>
        <Header
          style={{ background: "linear-gradient(to right, white 15%, green)" }}
        >
          <View className="nav_left">
            <BrannLogo />
          </View>
          <View className="nav">
            <BrannActiveButton
              label={"Finalizar la sesión"}
              onClick={() => onClickMenuItem("/loggut")}
            />
          </View>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
