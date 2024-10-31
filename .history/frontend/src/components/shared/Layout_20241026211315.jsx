import React from "react";
import Navbar from "./Navbar";
import Foo
import { Layout, theme } from "antd";
const { Content } = Layout;
const myLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Navbar />
      <Content>{children}</Content>
      <Footer
    </Layout>
  );
};
export default App;
