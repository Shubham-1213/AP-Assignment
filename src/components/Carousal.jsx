import React, { useState } from 'react';
import "../components/carousal.css";
import next from "../images/next.png";
import prev from "../images/prev.png";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  

  // Function to handle moving to the previous set of items
  const prevItems = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 3 : prevIndex - 1
    );
  };

  // Function to handle moving to the next set of items
  const nextItems = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
      <div className="controls">
        <button className="control-buttons" onClick={prevItems}><img src={prev} alt='prev'/></button>
      </div>
        {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div
          className={`carousel-item ${selectedItemIndex === currentIndex + index ? 'selected' : ''}`}
          key={index}
          onClick={() => setSelectedItemIndex(currentIndex + index)}
        >
            <div className="item-icon">{item.icon}</div>
            <div className="item-copy">{item.copy}</div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="control-buttons" onClick={nextItems}><img src={next} alt='next' /></button>
      </div>
    </div>
  );
};

export default Carousel;