import React from 'react';
import { Card, Carousel } from 'antd';
import "../styles/Accomplishments.css"

import datastorm_1 from '../images/datastom-1.jpeg';
import datastorm_2 from '../images/datastom-2.jpeg';
import datastorm_3 from '../images/datastom-3.jpeg';
import datastorm_4 from '../images/datastom-4.jpeg';



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
                        <Card title="Data Storm 4.0 - Winners" className='small-card' >
                            <Carousel autoplay>
                                <img src={datastorm_1} alt="Accomplishment 1" className="accomplishment-image" />
                                <img src={datastorm_2} alt="Accomplishment 2" className="accomplishment-image" />
                                <img src={datastorm_3} alt="Accomplishment 3" className="accomplishment-image" />
                                <img src={datastorm_4} alt="Accomplishment 4" className="accomplishment-image" />
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
