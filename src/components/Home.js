import React from 'react';
import { Col, Row, Menu, Button } from 'antd';



const Home = () => {
  return <>
    <Row>
      <Col span={24}>
      <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ flex: 1 }}
          items={[
            { key: "1", label: "Home" },
            { key: "2", label: "About" },
            { key: "3", label: "Contact" },
            { key: "4", label: "New ads" },
            { key: "5", label: <Button style={{ backgroundColor: "#09883cff", color: "white" }}>Publish Your Ad</Button>},
          ]}
        />
      </Col>
      <Col span={8}>Header</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={24}>col-8</Col>
    </Row>
  </>
}
export default Home;