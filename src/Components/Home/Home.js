import React from 'react'
import './Home.css';
import { Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home_container'>
            <div className='home_sub_container_left'>
                <h3>We help you to find solution for Billing.</h3>
                <p>Your unique requirements play a key role in determining the billing software that will drive operational efficiency and profitability. At the very least, all businesses require the core functionality that a basic billing system can offer.</p>
                    <button className='btn'>
                    <Link to='/B' className='home_listlink '>Start Now</Link>
                    </button>
            </div>
            <div className='home_sub_container_middle'>
            </div>
            <div className='home_sub_container_right'>
            </div>
        </div>
    )
}

export default Home