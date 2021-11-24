import React from 'react';
import './About.css'

const About = () => {
    return (
      <div>
        <div className=" container about">
          <h1 className="text-primary">
            "Purity Health Touch" is one of the most popular Gym center in this
            City area.Being Fit Boosts Energy, Mood, Sleep, and Your Immune System .
          </h1>
          <div className='text-center'>
            <button className="btn btn-danger me-3">See More</button>
            <button className="btn btn-primary">About More</button>
          </div>
        </div>
      </div>
    );
};

export default About;