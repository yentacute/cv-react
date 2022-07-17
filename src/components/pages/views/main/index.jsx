import React, { PropTypes } from 'react';
import SideBar from '../../layouts/sidebar';
import '../main/style.scss';
const Home = props => {
    return (
        <div className='main'>
            <div className="container">
                <SideBar />
            </div>
        </div>
    );
};

export default Home;