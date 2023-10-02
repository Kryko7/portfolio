
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import About from './components/About';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Banner from './components/Banner';
import './styles/header.css';
import './styles/layout.css';
import './styles/global.css';

import mylogo from './images/Minidu-logos-1.jpeg'
import code from './images/code.png'
 // Replace with the actual path to your logo

const { Header, Content, Footer } = Layout;

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout className="layout">
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
        {/* Render the Contact component */}
      </Header>
      <Content style={{ padding: '50px 50px 0'}}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <div className="site-layout-content">
          <Banner />
          <About />
          <Projects />
          <Accomplishments />
          <Contact />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Minidu Rupasinghe ©2023
      </Footer>
    </Layout>
  );
};

export default App;
