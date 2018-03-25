import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import MmHeader from "../components/mmHeader";
import HomePage from "./HomePage";

const {  Footer, Content } = Layout;

const App = () => (
  <Router>
    <Layout>
      <MmHeader />
      <Content>
        <Route exact path="/" component={HomePage} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </Router>
);

export default App;
