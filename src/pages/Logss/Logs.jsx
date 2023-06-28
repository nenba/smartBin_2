// import "./employee.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import { useState } from "react";
// //import { auth, db, storage } from "../../firebase";
// import {ref,push,child,update} from "firebase/database";
// import {database} from '../../firebase'
// import { Link } from "react-router-dom";


// const Employee = () => {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [binLocation, setBinLocation] = useState("");
//   const [binNumber, setBinNumber] = useState("");

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleNumberChange = (event) => {
//     setNumber(event.target.value);
//   };

//   const handleBinLocationChange = (event) => {
//     setBinLocation(event.target.value);
//   };

//   const handleBinNumberChange = (event) => {
//     setBinNumber(event.target.value);
//   };

//   const handleSubmit  = () => {
//     console.log(name, number, binLocation, binNumber);
//     let obj = {
//         EmployeeName:name,
//         EmployeeNumber:number,
//         BinLocation:binLocation,
//         BinNumber:binNumber,
        
//     };       
// const newPostKey = push(child(ref(database), 'posts')).key;
// const updates = {};
// updates['/' + newPostKey] = obj
// return update(ref(database), updates);

// };
  

//   return (
//     <>
//       <Navbar />
//       <form onSubmit={handleSubmit}>
//       <div className="employee">
//         <div className="form-group">
//           <label htmlFor="name">Employee Name:</label>
//           <input type="text" id="name" value={name} onChange={handleNameChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="number">Employee Number:</label>
//           <input type="text" id="number" value={number} onChange={handleNumberChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="location">Bin Location:</label>
//           <input type="text" id="location" value={binLocation} onChange={handleBinLocationChange} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="binNumber">Bin Number:</label>
//           <input type="text" id="binNumber" value={binNumber} onChange={handleBinNumberChange} />
//         </div>
//         <div className="form-group">
//   <button type="submit">Submit</button>
//       </div>
//       <div className="form-group">
//         <Link to="/Home">
//         <button type ="back">Home</button>
//         </Link>
//         </div>
//       </div>
//       </form>
//       <Sidebar />
//     </>
//   );
// };

// export default Employee;



// import React, { useState, useEffect } from 'react';
// import './logs.scss';
// import Navbar from '../../components/navbar/Navbar';
// import { Link } from "react-router-dom";
// import { db} from "../../firebase.js";
// import { doc, getDoc } from 'firebase/firestore';


// const PaginationTable = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(12); // Displayed items

//   useEffect(() => {
    
//     const startDate = new Date('2023-01-01'); // Specify your desired start date here
//     setData(generateDummyData(startDate));
//   }, []);

//   const generateDummyData = (startDate) => {
//     const startTime = new Date(
//       startDate.getFullYear(),
//       startDate.getMonth(),
//       startDate.getDate(),
//       0,
//       0
//     );
//     const endTime = new Date(
//       startDate.getFullYear(),
//       startDate.getMonth(),
//       startDate.getDate(),
//       23,
//       55
//     );
//     const timeInterval = 5 * 60 * 1000; 

//     const dummyData = [];
//     let currentTime = startTime;

//     while (currentTime <= endTime) {
//       const formattedTime = currentTime.toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit',
//       });

//       dummyData.push({
//         time: formattedTime,
//         weight: , // Replace with appropriate weight value in the future
//         volume: , // Replace with appropriate volume value in the future
//       });

//       currentTime = new Date(currentTime.getTime() + timeInterval);
//     }

//     return dummyData;
//   };

//   const totalItems = data.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   // Calculate indexes for displaying the current page's data
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   // Change page
//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const previousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };


//   const currentDate = new Date().toLocaleDateString('en-US', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   })
  
//   ;

//   return (
//     <div>
//       <Navbar />
//       <h1>Daily</h1>
//       <div>
//         <h2>Date: {currentDate}</h2>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Time</th>
//             <th>Weight</th>
//             <th>Volume</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((item, index) => (
//             <tr key={index}>
//               <td>{item.time}</td>
//               <td>{item.weight}</td>
//               <td>{item.volume}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination">
//         <button onClick={previousPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span>{currentPage}</span>
//         <button onClick={nextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaginationTable;


// import React, { useState, useEffect } from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import "./logs.scss";
// import { Link } from "react-router-dom";
// import { db } from "../../firebase.js";
// import { doc, getDoc } from 'firebase/firestore';

// const Logs = () => {
//   const [binData, setBinData] = useState({
//     time: "Loading...",
//     weight: "Loading...",
//     volume: "Loading...",
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const binRef = doc(db, "logs", "1");
//         const docSnap = await getDoc(binRef);

//         if (docSnap.exists()) {
//           const data = docSnap.data();

//           setBinData({
//             time: new Date(data.date_added.seconds * 1000).toLocaleString("en-US", {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//               hour: 'numeric',
//               minute: 'numeric',
//               second: 'numeric',
//               hour12: true
//             }),
//             weight: data.weight,
//             volume: data.volume,
//           });
//         } else {
//           console.log("No such document!");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const renderTableRows = () => {
//     const rows = [];
//     for (let i = 0; i < 12; i++) {
//       rows.push(
//         <tr key={i}>
//           <td>{binData.time}</td>
//           <td>{binData.weight}</td>
//           <td>{binData.volume}</td>
//         </tr>
//       );
//     }
//     return rows;
//   };

//   return (
//     <div className="home">
//       <Sidebar />
//       <div className="homeContainer">
//         <Navbar />
//         <h1>Bin#1 Daily Logs</h1>

//         <div className="binOne">
//           <div className="binText">
//             <p>Bin #1</p>
//           </div>

//           <table style={{ width: "100%", fontSize: "25px" }}>
//             <thead>
//               <tr>
//                 <th>Time</th>
//                 <th>Weight</th>
//                 <th>Volume</th>
//               </tr>
//             </thead>
//             <tbody>{renderTableRows()}</tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Logs;


import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./logs.scss";
import { Link } from "react-router-dom";
import { db } from "../../firebase.js";
import { doc, getDoc } from 'firebase/firestore';

const Logs = () => {
  const [binData, setBinData] = useState({
    time: "Loading...",
    weight: "Loading...",
    volume: "Loading...",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const binRef = doc(db, "logs", "1");
        const docSnap = await getDoc(binRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          setBinData({
            time: new Date(data.date_added.seconds * 1000).toLocaleString("en-US", {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: true
            }),
            weight: data.weight,
            volume: data.volume,
          });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const renderTableRows = () => {
    const rows = [];
    for (let i = 0; i < 12; i++) {
      rows.push(
        <tr key={i}>
          <td>{binData.time}</td>
          <td>{binData.weight}</td>
          <td>{binData.volume}</td>
        </tr>
      );
    }
    return rows;
  };

  const totalPages = 24;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pagination = [];
    const prevButton = (
      <button
        key="prev"
        className="page"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
    );
    const nextButton = (
      <button
        key="next"
        className="page"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    );
  
    pagination.push(prevButton);
  
    if (totalPages <= 7) {
      for (let page = 1; page <= totalPages; page++) {
        pagination.push(
          <button
            key={page}
            className={`page ${currentPage === page ? "active" : ""}`}
            onClick={() => handlePageChange(page)}
          >
            {currentPage === page ? (
              <strong className="highlighted-page">{page}</strong>
            ) : (
              page
            )}
          </button>
        );
      }
    } else {
      const maxVisiblePages = 5;
      let startPage, endPage;
  
      if (currentPage <= Math.floor(maxVisiblePages / 2)) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage + Math.floor(maxVisiblePages / 2) >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxVisiblePages / 2);
        endPage = currentPage + Math.floor(maxVisiblePages / 2);
      }
  
      if (startPage > 1) {
        pagination.push(
          <button
            key={1}
            className="page"
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
        );
        if (startPage > 2) {
          pagination.push(<span key="dots1">...</span>);
        }
      }
  
      for (let page = startPage; page <= endPage; page++) {
        pagination.push(
          <button
            key={page}
            className={`page ${currentPage === page ? "active" : ""}`}
            onClick={() => handlePageChange(page)}
          >
            {currentPage === page ? (
              <strong className="highlighted-page">{page}</strong>
            ) : (
              page
            )}
          </button>
        );
      }
  
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pagination.push(<span key="dots2">...</span>);
        }
        pagination.push(
          <button
            key={totalPages}
            className="page"
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }
  
    pagination.push(nextButton);
  
    return pagination;
  };
  
  
  

  const getPageData = () => {
    const startIndex = (currentPage - 1) * 12;
    const endIndex = startIndex + 12;
    const rows = renderTableRows().slice(startIndex, endIndex);
    return rows;
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>Bin#1 Daily Logs</h1>

        <div className="binOne">
          <div className="binText">
            <p>Bin #1</p>
          </div>

          <table style={{ width: "100%", fontSize: "25px" }}>
            <thead>
              <tr>
                <th>Time</th>
                <th>Weight</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>{getPageData()}</tbody>
          </table>

          <div className="pagination">{renderPagination()}</div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
