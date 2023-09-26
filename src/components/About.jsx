import React from 'react';
import { Card } from 'antd';
import "../styles/About.css"

const About = () => {
    const cardStyle = {
        background: '#1890ff', // Set your desired background color here
        animation: 'backgroundAnimation 10s infinite alternate',
        border: 'none',

    };


    return (
        <div id="about" className="about">
            <Card title="About Me" style={cardStyle} className='custom-card'>
                <p>I'm Minindu Thiaranjaya Rupasinghe, a dedicated Computer Science and Engineering undergraduate at the esteemed University of Moratuwa, Sri Lanka. I'm deeply passionate about problem-solving, especially when it comes to tackling intricate challenges. My areas of keen interest lie in the realms of Machine Learning, Natural Language Processing, software development, and Artificial Intelligence.</p>

                <p>Beyond the world of coding, I find solace in the beautiful game of football, where strategy and teamwork harmonize to create moments of brilliance. As much as I relish the thrill of the pitch, I'm equally captivated by the boundless creativity of the fantasy genre, where worlds come alive through imagination.</p>

                <p>Through this blend of technical prowess and a passion for creativity, I'm on a journey to make a meaningful impact in the realm of technology and beyond. Join me as I embark on this exciting odyssey of learning, problem-solving, and pushing boundaries.</p>
            </Card>
        </div>
    );
}

export default About;