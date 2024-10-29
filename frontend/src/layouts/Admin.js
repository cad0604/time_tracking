import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Layout, Avatar, Dropdown } from "antd";
import {
  faUser,
  faSignOut,
  faPeopleGroup,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import View from "components/ui/box/View";
import BrannIcon from "components/ui/typo/Icon";
import { useNavigate } from "react-router-dom";
import BrannLogo from "components/common/Logo";

const { Header, Content } = Layout;

const AdminLayout = ({ children, overflow = "hidden" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const menuItems = [
    {
      key: "/administración/informe",
      icon: <BrannIcon icon={faClock} size={16} />,
      label: "Informes",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: true,
      onClick: () => onClickMenuItem("/administración/informe"),
    },
    {
      key: "/administración/tabla",
      icon: <BrannIcon icon={faPeopleGroup} size={16} />,
      label: "Tabla de trabajadoras",
      showInMobile: true,
      showInDesktop: false,
      isAdmin: true,
      onClick: () => onClickMenuItem("/administración/tabla"),
    },
    {
      type: "divider",
      style: { background: "#333" },
    },
    {
      key: "/loggut",
      icon: <BrannIcon icon={faSignOut} size={16} />,
      label: "Finalizar la sesión",
      onClick: () => onClickMenuItem("/loggut"),
    },
  ];

  const items = menuItems
    .filter((item) => {
      if (item.key === "/loggut") return true;
      if (item.type === "divider") return true;
      return user.isAdmin ? item.isAdmin : !item.isAdmin;
    })
    .map((item) => {
      if (item.type === "divider") {
        return {
          type: item.type,
          style: item.style,
        };
      } else {
        return {
          key: item.key,
          icon: item.icon,
          label: item.label,
          onClick: item.onClick,
        };
      }
    });

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
            <Dropdown
              menu={{ items }}
              overlayClassName="header-menu"
              trigger={["click"]}
              arrow
            >
              <Avatar size="large" icon={<BrannIcon icon={faUser} />} />
            </Dropdown>
          </View>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
