import React, { useState } from "react";
import { Layout, Menu, Space } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "./routes";

const { Sider, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: "80vh",
  lineHeight: "120px",
  color: "#000000",
  paddingTop: "3rem",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  paddingTop: "1rem",
};

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label,
    path,
  };
}

const items = [
  getItem("Products", "sub1", <AppstoreOutlined />, [
    getItem("Add Item", "1", null, null, "/"),
    getItem("Edit Item", "2", null, null, "/edit"),
    getItem("Delete Item", "3", null, null, "/delete"),
  ]),
];

const App = () => {
  const navigate = useNavigate();

  const renderMenuItems = (items) =>
    items.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key} onClick={() => navigate(item.path)}>
            {item.label}
          </Menu.Item>
        );
      }
    });

  const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  const routeComponents = routes.map(({ path, element }, key) => (
    <Route path={path} element={element} key={key} />
  ));

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Sider style={siderStyle}>
          <Menu
            style={{
              height: "100vh",
              textAlign: "center",
              paddingLeft: "0px",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
          >
            {renderMenuItems(items)}
          </Menu>
        </Sider>
        <Layout>
          <Content style={contentStyle}>
            <Routes>{routeComponents}</Routes>
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
};
export default App;
