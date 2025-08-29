import React from 'react';
import { Col, Row } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';

const Home = () => {
  return <>
    <Row>
      <Col span={24}>
     <Header/>
      </Col>
    </Row>
    <Row>
      <Col span={4}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuP0jyd1nXab41o-C9ZJ9T7fS6FVk6OLNTSA&s' alt="demo"/>
      </Col>
      <Col span={12}>
      <Register/>
      </Col>
      <Col span={8}><Login/></Col>
    </Row>
    <Row>
      <Col span={24}><Footer/></Col>
    </Row>
  </>
}
export default Home;