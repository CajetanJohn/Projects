import React from 'react';
import people from '../Assets/imgs/people.jpg'
import students from "../Assets/imgs/student.jpg"
import graduation from '../Assets/imgs/graduation.jpg'

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="image-container">
        <img
          src={students}
          alt="Extensive research"
          className="image"
        />
        <div className="image-text">Extensive research on your work.</div>
      </div>

      <div className="image-container">
        <img
          src={people}
          alt="Round the clock service"
          className="image"
        />
        <div className="image-text">Round the clock service</div>
      </div>

      <div className="image-container first">
        <img
          src={graduation}
          alt="we ensure A-grade performance"
          className="image"
        />
        <div className="image-text">A-grade performance</div>
      </div>
    </div>
  );
};

export default Gallery;