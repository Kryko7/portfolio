
import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import About from './components/About';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

import './styles/layout.css';
import './styles/global.css';


const { Content, Footer } = Layout;

const App = () => {

  return (
    <Layout className="layout">
      <Navbar />
      <Content style={{ padding: '50px 50px 0'}}>
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
