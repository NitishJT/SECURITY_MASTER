import React, { useState, useEffect } from 'react';

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint URL
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>JSON Data from API</h1>
      <table>
        <thead>
          <tr>
          <th>NAME</th>
            <th>ID_BB_GLOBAL</th>
            
            <th>MARKET_SECTOR</th>
            <th>EXC_COD</th>
            {/* Add more table headers for your data */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID_BB_GLOBAL}>
                <td>{item.NAME}</td>
              <td>{item.ID_BB_GLOBAL}</td>
              
              <td>{item.MARKET_SECTOR}</td>
              <td>{item.CRNCY}</td>
              <td>{item.EXC_COD}</td>
              {/* Add more table cells for other data properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
