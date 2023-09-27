
import React, { useState } from 'react';
import { Card, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import "../styles/Projects.css"

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (githubLink) => {
    window.open(githubLink, '_blank');
  };

  const handleMainCardClick = () => {
    window.open('https://github.com/Kryko7?tab=repositories', '_blank'); // Replace with your GitHub profile link
  };

  const projects = [
    {
        title: 'Babbler - Book Summarization and QA ChatBot',
        description: [`Babbler is a chatbot designed to summarize books from Project Gutenberg and answer user questions about them. It utilizes advanced language models like LLMs (Llama of the QA) and Bart for summarization.`,`The technologies involved include PyTorch, Langchain, FastAPI, Streamlit, VectorDB, and Instructor-large embedding models.`],
        githubLink: 'https://github.com/orgs/BabblerBot/repositories', // Replace with your GitHub project link
    },
    {
        title: "Ecommerce website - Frontend",
        description: [
          "The Ecommerce website frontend is built using React and the Ant Design library.",
          "This provides a seamless and user-friendly shopping experience for customers, with a modern and visually appealing interface."
        ],
        githubLink: "https://github.com/Kryko7/frontend"
    },
    {
        title: "Ecommerce website - Backend",
        description: [
          "The backend of the Ecommerce website is developed using Node.js and Express, providing a robust and scalable server environment.",
          "The database is designed using MySQL, ensuring efficient data storage and retrieval for the application."
        ],
        githubLink: "https://github.com/Kryko7/backend"
    },
    {
        title: "Chat App",
        description: [
          "Designed and developed a user-friendly chat application for seamless communication. Users can sign in with their email, search for contacts, and initiate conversations.",
          "Frontend implemented with React, providing an intuitive and interactive user interface. Authentication, database management, and storage handled efficiently through Firebase services."
        ],
        githubLink: "https://github.com/Kryko7/Chat-App"
    },
    {
        title: "CLI-based Email Client",
        description: [
          "Developed a command-line interface (CLI) email client in Java, emphasizing object-oriented programming (OOP) principles and utilizing design patterns for efficient code structure.",
          "The client allows users to manage emails through the command line, providing a seamless and intuitive experience. It demonstrates a strong grasp of OOP concepts and design patterns in Java development."
        ],
        githubLink: "https://github.com/Kryko7/email-client"
    },
    {
        title: "Portfolio Website",
        description: [
          "Designed and developed a portfolio website to showcase my projects and skills. The website is built using React and leverages the Ant Design library for a sleek and modern UI.",
          "Deployed the portfolio using GitHub Pages for easy accessibility. The website provides a user-friendly interface for navigating through my projects and learning more about my capabilities."
        ],
        githubLink: "https://github.com/minindurupasinghe/minindurupasinghe.github.io"
    },
    {
        title: "Nano Processor Design",
        description: [
          "Designed and implemented a simple nano processor, showcasing proficiency in digital circuit design. The project utilized Vivado Xilinx and VHDL for effective processor development."
        ],
        githubLink: "https://github.com/Kryko7/nano-processor-design"
    }
    // Add more projects as needed
  ];

  const cardStyle = {
    background: '#1890ff', // Set your desired background color here
    animation: 'backgroundAnimation 10s infinite alternate',
    border: 'none',    
    };
  const cardStyleHovered = {
    border: 'none', 
    cursor: 'pointer',   
    };
  

  return (
    <div id="projects" className="projects">
    <Card title="Projects" bordered={false} style={cardStyle} className='custom-card'>
      <Row gutter={16} className='custom-row'>
        {projects.map((project, index) => (
          <Col span={12} key={index}>
            <Card
              title={project.title}
              bordered={false}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(project.githubLink)}
              style= {cardStyleHovered}
              border = {false}
              className='custom-card'
            >
              <p>{project.description}</p>
            </Card>
          </Col>
        ))}
        <Col span={12}>
            <Card
                title={<PlusOutlined style={{ fontSize: '48px' }} />}
                bordered={false}
                onClick={handleMainCardClick}
                style={{ cursor: 'pointer', textAlign: 'center', fontSize: 'large' }}
            >
            <p>Click to view all projects</p>
          </Card>
        </Col>
      </Row>
    </Card>
    </div>
  );
};

export default Projects;
