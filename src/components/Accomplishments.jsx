import React from 'react';
import { Card, Carousel } from 'antd';
import "../styles/Accomplishments.css"

const Accomplishments = () => {
    const cardStyle = {
        background: '#1890ff', // Set your desired background color here
        animation: 'backgroundAnimation 10s infinite alternate',
        border: 'none',
    };

    const cardStyle1 = {
        background: '#1890ff', // Set your desired background color here
        animation: 'backgroundAnimation 10s infinite alternate',
        border: 'none',
    };

    return (
        <div id="accomplishments" className="accomplishments">
            <Card title="Accomplishments" style = {cardStyle} className='custom-card'>
                <Carousel autoplay>
                    <div>
                        <Card title="Data Storm 4.0 - Winners" >
                            <Carousel autoplay>
                                <img src="datastom-1.jpeg" alt="Accomplishment 1" className="accomplishment-image" />
                                <img src="datastom-2.jpeg" alt="Accomplishment 2" className="accomplishment-image" />
                                <img src="datastom-3.jpeg" alt="Accomplishment 3" className="accomplishment-image" />
                                <img src="datastom-4.jpeg" alt="Accomplishment 4" className="accomplishment-image" />
                            </Carousel>
                            <p>As part of Team Milkman, we emerged victorious in Data Storm 4.0, Sri Lanka's leading Advanced Analytics Competition. The competition encompassed three challenging stages, starting with a classification task, where we adeptly categorized and prioritized shops from a supplier's perspective. We then tackled a clustering problem, grouping similar shops and strategically recommending freezers for enhanced profitability and ROI. In the final stage, we devised an analytical solution, optimizing product placement in freezers to maximize profits, impressing the esteemed judge panel. This experience not only showcased our analytical prowess but also provided invaluable real-world problem-solving exposure.</p>
                        </Card>
                    </div>
                </Carousel>
            </Card>
        </div>
    );
}

export default Accomplishments;
