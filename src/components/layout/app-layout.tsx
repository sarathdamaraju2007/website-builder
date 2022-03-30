import { FC } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { SideNav } from "../molecules/navbar";

const Layout = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #f0f2f5;
  width: 100vw;
`;

const Header = styled.header`
  height: 64px;
  padding: 0 50px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 64px;
  background: #fff;
  flex: 0 0 auto;
  box-shadow: inset 2px 0 0 0 #f2f7fa, 0 10px 10px 0 rgb(0 0 0 / 1%);
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #eee;
`;

const Sider = styled.div`
  position: fixed;
  width: 64px;
  background: #fff;
  transition: all 0.2s;
  flex-direction: row;
  height: 100vh;
  border-right: 1px solid #eee;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: auto;
  flex-direction: row;
  min-height: 0;
  background: #f0f2f5;
  margin-top: 64px;
`;

const Content = styled.div`
  flex: auto;
  height: calc(100vh - 64px);
  overflow: auto;
  background: #f2f7fa;
  margin-left: 64px;
`;

export const AppLayout: FC<{ title: string }> = ({ title, children }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header></Header>
      <ContentWrapper>
        <Sider>
          <SideNav />
        </Sider>
        <Content>{children}</Content>
      </ContentWrapper>
    </Layout>
  );
};
