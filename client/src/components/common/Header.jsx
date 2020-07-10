import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const Header = () => {
  const { Header } = Layout;
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Contact</Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default Header;
