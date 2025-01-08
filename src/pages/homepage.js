import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css'

const HomePage = () => {
    return (
        <>
        <div class="main-container">
        <div class="blur-circle1">

        </div>
        <div class="blur-circle2">

        </div>
      <div class="landing-page">
        <header>
          <div class="container">
           
          </div>
        </header>
        <div class="content">
          <div class="container">
            <div class="info">
              <h1>Buyers details management</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
              <button className='btn buyerbtn'><Link to="/add-buyer">Add Buyer</Link></button>
              <button className='btn'><Link to="/manage-buyers">Manage Buyers</Link></button>
            </div>
            <div class="image">
              <img class="main-image" src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp"/>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default HomePage;
