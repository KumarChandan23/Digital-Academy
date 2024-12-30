// src/components/ProgramNavigation.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/programsNavigation.css';

const ProgramNavigation = ({ navItems, onItemSelect }) => {
  // State to track the clicked item
  const [selectedIndex, setSelectedIndex] = useState();

  // Handle click event for each item
  const handleClick = (index, itemData) => {
    setSelectedIndex(index); // Update the selected item index
    onItemSelect(itemData); // Call onItemSelect with the item data
  };

  return (
    <ul className="program-list">
      {navItems.map((item, index) => (
          <li  key={index}
            className={`programs-list-item ${selectedIndex === index ? 'selected' : ''}`} // Add 'selected' class if this item is clicked
            onClick={() => handleClick(index, item.data)} // Update selected index and call onItemSelect
          >
            {item.label}
          </li>
      ))}
    </ul>
  );
};

export default ProgramNavigation;
