// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import '../home/HomePage.css'; // Add your custom CSS if needed

const MyHomePage = () => {
  
  return (
    <>
      <header className="bg-light p-3 border-bottom">
        <nav className="container d-flex justify-content-between">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destinations">Destinations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <button className="btn btn-outline-danger" onClick={() => {
            localStorage.removeItem('isLoggedIn');
            window.location.href = '/login';
          }}>Log Out</button>
        </nav>
      </header>

      <div className="container mt-5">
        <section className="hero bg-primary text-white text-center p-5 mb-5">
          <h1>Welcome to Your Next Adventure!</h1>
          <p>Explore the world with our exclusive travel packages</p>
          <button className="btn btn-light mt-3">Get Started</button>
        </section>
        
    

        <section className="featured-destinations">
          <h2 className="text-center mb-4">Featured Destinations</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Destination 1" />
                <div className="card-body">
                  <h5 className="card-title">Destination 1</h5>
                  <p className="card-text">Discover the beauty of this amazing place.</p>
                  <Link to="/destination/1" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Destination 2" />
                <div className="card-body">
                  <h5 className="card-title">Destination 2</h5>
                  <p className="card-text">Experience the adventure of a lifetime.</p>
                  <Link to="/destination/2" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Destination 3" />
                <div className="card-body">
                  <h5 className="card-title">Destination 3</h5>
                  <p className="card-text">Enjoy the serene landscapes and vibrant culture.</p>
                  <Link to="/destination/3" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-light text-center p-3 mt-5">
        <p>&copy; 2024 Tour and Travel. All rights reserved.</p>
      </footer>
    </>
  );
};

export default MyHomePage;
