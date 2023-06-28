

import Navbar from "../../components/navbar/Navbar";
import React, { useState, useEffect } from 'react';
import "./report.scss";
import { Link } from "react-router-dom";
import { db } from "../../firebase.js";
import { doc, getDoc } from 'firebase/firestore';

const Report = () => {
  const [weekData, setWeekData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const IDs = Array.from({length: 288}, (_, i) => i + 1); // create an array of IDs from 1 to 288
        const today = new Date();
        const dateString = today.toISOString().slice(0, 10);
        const binRef = doc(db, "database", "tootfyaHcMhppikJcPaC", "dailyLogs", dateString, "logs", IDs);

        const docSnap = await getDoc(binRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setWeekData({ 
            weight: data.weight,
            volume: data.volume,});
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const IDs = Array.from({length: 1}, (_, i) => i + 1); // create an array of IDs from 1 to 288

  const rows = IDs.map(id => {
    const volume = weekData[id] ? weekData[id].volume : 0; // get the volume data for the ID or 0 if not available
    const weight = weekData[id] ? weekData[id].weight : 0; // get the weight data for the ID or 0 if not available

    return (
      <tr key={id}>
        <td>{volume}</td>
        <td>{weight}</td>
      </tr>
    );
  });

  return (
    <>
      <Navbar />
      <div className="report">
        <div className="weekly-report">
          <h2>Daily Logs</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Volume</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  );
};

export default Report;

