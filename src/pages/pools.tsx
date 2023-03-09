import React from "react";
import styled from "styled-components";
import Footer from "../containers/Footer";
import { DownOutlined } from "@ant-design/icons";
import Navbar from "../containers/navbar/Navbar";
import { ScreenWidth } from "../utils/styled";
import { useAppContext } from "../context/app/appContext";
import { Br } from "../common/components/atomic";
import FavoritePools from "../containers/pools/FavoritePools";
import TopPools from "../containers/pools/TopPools";
import { Dropdown, Space } from "antd";
import { NETWORKS } from "../common/network";

const BodyContainer = styled.div`
  max-width: 900px;
  margin: auto;
  padding-top: 100px;

  @media only screen and (max-width: ${ScreenWidth.TABLET}px) {
    margin: auto 15px;
    padding-top: 85px;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  & h2 {
    font-size: 1.2rem;
    margin: 0;
  }
`;

const items = NETWORKS.map((network) => {
  return {
    key: network.id,
    label: <div>{network.name}</div>,
  };
});

function App() {
  const { state } = useAppContext();

  return (
    <>
      <Navbar />
      <BodyContainer>
        <HeaderContainer>
          <h2>Pool Overview</h2>
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ["ethereum"],
            }}
            placement="bottomRight"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </HeaderContainer>
        <Br />

        <FavoritePools />
        <Br />
        <TopPools />

        <Footer />
      </BodyContainer>
    </>
  );
}

export default App;
export { Head } from "../common/components/Head";