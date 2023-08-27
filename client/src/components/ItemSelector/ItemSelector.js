import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from "../../context/context";
import './ItemSelector.css'

function ItemSelector() {
  const [items, setItems] = useState([]);
  const {
    setBFile
  } = useGlobalContext()

  useEffect(() => {
    // Fetch items from the backend JSON file when the component mounts
    axios.get('http://localhost:8000/server/asset/get-all-fileName')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <div className="ItemSelector">
      <h3>Select Use Case</h3>
      <select onChange={(e) => setBFile(e.target.value)}>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className='space'/>
    </div>
  );
}

export default ItemSelector;
