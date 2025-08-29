import React from 'react';
import { Menu, Button } from 'antd';

const Header = () => {
    return <>
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
    </>
}

export default Header;