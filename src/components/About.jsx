import React from 'react';
import { Card } from 'antd';
import "../styles/About.css"
import python from '../images/python.png';
import java from '../images/java.png';
import c from '../images/c.png';
import js from '../images/java-script.png';
import node from '../images/node-js.png';
import react from '../images/react.png';
import git from '../images/git.png';
import pytorch from '../images/pytorch.png';
import scikit from '../images/scikit-learn.svg';
import pandas from '../images/pandas.svg';
import numpy from '../images/numpy.svg';


const About = () => {
    const cardStyle = {
        background: '#1890ff',
        animation: 'backgroundAnimation 10s infinite alternate',
        border: 'none',
    };

    return (
        <div id="about" className="about">
            <Card title="About Me" style={cardStyle} className='custom-card-1'>
                <ul>
                    <li>
                        Computer Science and Engineering undergraduate at the University of Moratuwa, Sri Lanka.
                    </li>
                    <li>
                        Passionate about problem-solving, especially in Machine Learning, NLP, software development, and AI.
                    </li>
                    <li>
                        Enthusiastic about football, movies, and anime.
                    </li>
                    <li>
                        Combining technical prowess with creativity to make a meaningful impact.
                    </li>
                </ul>
            </Card>

            <Card title="Tech Stack" style={cardStyle} className='custom-card'>
                <ul className="tech-stack-icons">
                    <li><img src={python} alt="Python" /></li>
                    <li><img src={java} alt="Java" /></li>
                    <li><img src={c} alt="C" /></li>
                    <li><img src={js} alt="JavaScript" /></li>
                    <li><img src={react} alt="React" /></li>
                    <li><img src={node} alt="Node.js" /></li>
                    <li><img src={pytorch} alt="PyTorch" /></li>
                    <li><img src={scikit} alt="scikit-learn" /></li>
                    <li><img src={pandas} alt="Pandas" /></li>
                    <li><img src={numpy} alt="NumPy" /></li>
                    <li><img src={git} alt="Git" /></li>
                </ul>
            </Card>
        </div>
    );
}

export default About;