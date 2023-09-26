import React from 'react';
import { Card } from 'antd';
import { PhoneOutlined, TwitterOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import "../styles/Contact.css"

const Contact = () => {
    const handlePhoneClick = () => {
        window.alert("+94 717382424"); // Display a pop-up with the phone number
    }

    const handleLinkClick = (link) => {
        window.open(link, '_blank'); // Open links in a new tab
    }

    const cardStyle = {
        background: '#1890ff', // Set your desired background color here
        animation: 'backgroundAnimation 10s infinite alternate',
        border: 'none',
    };

    return (
        <div id="contact" className="contact">
            <Card title="Contact" style={cardStyle} className='custom-card'>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-block', margin: '0 80px' }}>
                        <PhoneOutlined style={{ fontSize: '32px' }} onClick={handlePhoneClick} />
                    </div>
                    <div style={{ display: 'inline-block', margin: '0 80px' }}>
                        <TwitterOutlined style={{ fontSize: '32px' }} onClick={() => handleLinkClick('https://twitter.com/MininduThiranj1?t=82AIFZfgAcR3T3wvrk8wKQ&s=09')} />
                    </div>
                    <div style={{ display: 'inline-block', margin: '0 80px' }}>
                        <GithubOutlined style={{ fontSize: '32px' }} onClick={() => handleLinkClick('https://github.com/Kryko7')} />
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <div style={{ display: 'inline-block', margin: '0 80px' }}>
                        <LinkedinOutlined style={{ fontSize: '32px' }} onClick={() => handleLinkClick('https://www.linkedin.com/in/minindu-rupasinghe-15a2471a0')} />
                    </div>
                    <div style={{ display: 'inline-block', margin: '0 80px' }}>
                        <MailOutlined style={{ fontSize: '32px' }} onClick={() => handleLinkClick('mailto:minindurupsinghe@gmail.com')} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Contact;
