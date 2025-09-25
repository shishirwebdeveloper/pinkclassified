import React from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
  return <>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ flex: 1 }}
      items={[
        { key: "1", label: <Link to="/">Home</Link> },
        { key: "2", label: <Link to="/about">About us</Link> },
        { key: "3", label: <Link to="/contact">Contact us</Link> },
        { key: "4", label: <Link to="/register">Register</Link> },
        { key: "5", label: <Link to="/login">Login</Link> },
        { key: "6", label: <Button onClick={() => window.location.href = "/postfreead"} style={{ backgroundColor: "#09883cff", color: "white" }}>Publish Your Ad</Button> },
      ]}
    />
  </>
}

export default Header;