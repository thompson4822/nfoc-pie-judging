import {Link} from "react-router-dom";
import {Layout, Menu} from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import React from "react";
import {Header} from "antd/es/layout/layout";

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea'
};

const Navbar = () => {
  return (
      <Layout>
          <Header style={headerStyle} className="header">
              <div className="logo"><img src='/NFOC_Logo-2019.svg' alt={'the logo'}/></div>
              <Menu mode="horizontal" theme="dark">
                  <MenuItem key="home"><Link to='/'>Home</Link></MenuItem>
                  <MenuItem key="about"><Link to='/about'>About</Link></MenuItem>
              </Menu>
          </Header>
      </Layout>
  );
};

export default Navbar;