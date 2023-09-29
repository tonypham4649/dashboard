import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Menu One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
  ]),
  {
    type: "divider",
  },
  getItem("Menu Two", "sub2", <AppstoreOutlined />, [getItem("Option 4", "4")]),
];

const SideNav = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
export default SideNav;
