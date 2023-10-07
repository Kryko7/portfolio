import React from 'react';
import { Layout, Menu } from 'antd';
import code from '../images/code.png'; // Assuming you have an image file named code.png
import '../styles/header.css';
const { Header } = Layout;

const Navbar = () => {

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    };
  return (
    <Header className="header">
      <div className="logo">
        <img src={code} alt="Logo" style={{ height: '120px', width: '100px', paddingTop: '10px' }} />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className='custom-menu'>
        <Menu.Item key="1" onClick={() => scrollToSection('about')}>
          About Me
        </Menu.Item>
        <Menu.Item key="2" onClick={() => scrollToSection('projects')}>
          Projects
        </Menu.Item>
        <Menu.Item key="3" onClick={() => scrollToSection('accomplishments')}>
          Accomplishments
        </Menu.Item>
        <Menu.Item key="4" onClick={() => scrollToSection('contact')}>
          Contact
        </Menu.Item>
      </Menu>
      {/* Render any additional components or elements you need in the header */}
    </Header>
  );
};

export default Navbar;