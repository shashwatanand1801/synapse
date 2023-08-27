import React from 'react';
import './Table.css';

const NestedJsonTable = ({ data }) => {

  if((typeof data) == 'string'){
    console.log("data id string, returning null")
    return null;
  }

  if(data != null){
    data = data.mapping;
  }
  
  if (!data || !Array.isArray(data)) {
    console.log("No data ava -> ", data)
    return <p>No data available</p>;
  }

  const commonKeys = Object.keys(data[0]);

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            {commonKeys.map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((nestedObject, index) => (
            <tr key={index}>
              {commonKeys.map(key => (
                <td key={key}>{nestedObject[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NestedJsonTable;
