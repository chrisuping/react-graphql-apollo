import React from "react";
import { useQuery } from "@apollo/react-hooks";

import "./index.css";
import Section from "./components/Section";
import { GET_USERS } from "./actions/query";
import { Layout } from "antd";
import Header from "./components/common/Header.jsx";
import Error from "./components/common/Error.jsx";
import Loading from "./components/common/Loading.jsx";
const { Content } = Layout;

const App = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (error) return <Error />;
  if (loading) return <Loading />;
  return (
    <>
      <Layout className="layout">
        <Header />
        <Content style={{ padding: "50px" }}>
          <Section data={data} />
        </Content>
      </Layout>
    </>
  );
};

export default App;
