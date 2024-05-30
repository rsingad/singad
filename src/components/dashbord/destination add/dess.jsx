// import React, { useState } from "react";
// import axios from "axios";
// import {v4 as uuidv4} from "uuid";
// import { Navigate, useNavigate } from "react-router-dom";

// const Destinationapi = () => {
//     const navigate=useNavigate();
//   const [destinationData, setDestinationData] = useState({
//     id: "",
//     name: "",
//     location: "",
//     days: "",
//     amount: "",
//     description: "",
//     minimumPeople: "",
//     tourType: "",
//     tourPoints: "",
//     imageUrl:"",
//   });

//   const [destinations, setDestinations] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDestinationData({ ...destinationData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const apiUrl = "https://65a0ef06600f49256fb08ab2.mockapi.io/users/1";

//     // Set a new UUID for each new destination entry
//     const newData = { ...destinationData, id: uuidv4() };

//     axios
//       .get(apiUrl)
//       .then((response) => {
//         const updatedData = {
//           ...response.data,
//           destination: [...response.data.destination, newData],
//         };

//         axios
//           .put(apiUrl, updatedData)
//           .then((res) => {
//             setDestinations(updatedData.destination);
//             alert("Destination added successfully!");
//             navigate('/adminDES')
//           })
//           .catch((error) => {
//             console.error("There was an error updating the data!", error);
//           });
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the data!", error);
//       });
//   };

//   return (
//     <div className="container">
//       <h2>Add New Destination</h2>
      // <form onSubmit={handleSubmit}>
      //   <div className="mb-3">
      //     <label htmlFor="imageUrl" className="form-label">
      //       Image URL
      //     </label>
      //     <input
      //       type="text"
      //       className="form-control"
      //       id="imageUrl"
      //       name="imageUrl"
      //       value={destinationData.imageUrl}
      //       onChange={handleChange}
      //     />
      //   </div>
      //   <div className="mb-3">
      //     <label htmlFor="name" className="form-label">
      //       Destination Name
      //     </label>
      //     <input
      //       type="text"
      //       className="form-control"
      //       id="name"
      //       name="name"
      //       value={destinationData.name}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>

      //   <div className="mb-3">
      //     <label htmlFor="location" className="form-label">
      //       Location
      //     </label>
      //     <input
      //       type="text"
      //       className="form-control"
      //       id="location"
      //       name="location"
      //       value={destinationData.location}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>
      //   <div className="mb-3">
      //     <label htmlFor="days" className="form-label">
      //       Duration (days)
      //     </label>
      //     <input
      //       type="number"
      //       className="form-control"
      //       id="days"
      //       name="days"
      //       value={destinationData.days}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>
      //   <div className="mb-3">
      //     <label htmlFor="amount" className="form-label">
      //       Amount
      //     </label>
      //     <input
      //       type="number"
      //       className="form-control"
      //       id="amount"
      //       name="amount"
      //       value={destinationData.amount}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>
      //   <div className="mb-3">
      //     <label htmlFor="description" className="form-label">
      //       Description
      //     </label>
      //     <textarea
      //       className="form-control"
      //       id="description"
      //       name="description"
      //       value={destinationData.description}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>
      //   <div className="mb-3">
      //     <label htmlFor="minimumPeople" className="form-label">
      //       Minimum People
      //     </label>
      //     <input
      //       type="number"
      //       className="form-control"
      //       id="minimumPeople"
      //       name="minimumPeople"
      //       value={destinationData.minimumPeople}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>
      //   <div className="mb-3">
      //     <label htmlFor="tourType" className="form-label">
      //       Tour Type
      //     </label>
      //     <input
      //       type="text"
      //       className="form-control"
      //       id="tourType"
      //       name="tourType"
      //       value={destinationData.tourType}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>
      //   <div className="mb-3">
      //     <label htmlFor="tourPoints" className="form-label">
      //       Tour Points (comma separated)
      //     </label>
      //     <input
      //       type="text"
      //       className="form-control"
      //       id="tourPoints"
      //       name="tourPoints"
      //       value={destinationData.tourPoints}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>
      //   <button type="submit" className="btn btn-primary">
      //     Add Destination
      //   </button>
      // </form>
//       <h3>Current Destinations</h3>
//       <ul>
//         {destinations.map((destination, index) => (
//           <li key={index}>
//             {destination.name} - {destination.location} - {destination.days}{" "}
//             days - {destination.amount} - {destination.description} - Minimum{" "}
//             {destination.minimumPeople} people - {destination.tourType} -
//             Points: {destination.tourPoints}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Destinationapi;


import React, { useState } from "react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import { Navigate, useNavigate } from "react-router-dom";

const Destinationapi = () => {
    const navigate=useNavigate();
  const [destinationData, setDestinationData] = useState({
    id: "",
    name: "",
    location: "",
    days: "",
    amount: "",
    description: "",
    minimumPeople: "",
    tourType: "",
    tourPoints: "",
    imageUrl:"",
  });

  const [destinations, setDestinations] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestinationData({ ...destinationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = "https://65a0ef06600f49256fb08ab2.mockapi.io/destinationdata";

    // Set a new UUID for each new destination entry
    const newData = { ...destinationData, id: uuidv4() };

    axios
      .post(apiUrl, newData)
      .then((response) => {
        setDestinations([...destinations, response.data]);
        alert("Destination added successfully!");
        navigate('/adminDES')
      })
      .catch((error) => {
        console.error("There was an error adding the destination!", error);
      });
  };

  return (
    <div className="container">
      <h2>Add New Destination</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={destinationData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Destination Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={destinationData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={destinationData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="days" className="form-label">
            Duration (days)
          </label>
          <input
            type="number"
            className="form-control"
            id="days"
            name="days"
            value={destinationData.days}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={destinationData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={destinationData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="minimumPeople" className="form-label">
            Minimum People
          </label>
          <input
            type="number"
            className="form-control"
            id="minimumPeople"
            name="minimumPeople"
            value={destinationData.minimumPeople}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tourType" className="form-label">
            Tour Type
          </label>
          <input
            type="text"
            className="form-control"
            id="tourType"
            name="tourType"
            value={destinationData.tourType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tourPoints" className="form-label">
            Tour Points (comma separated)
          </label>
          <input
            type="text"
            className="form-control"
            id="tourPoints"
            name="tourPoints"
            value={destinationData.tourPoints}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Destination
        </button>
      </form>
      <h3>Current Destinations</h3>
      <ul>
        {destinations.map((destination, index) => (
          <li key={index}>
            {destination.name} - {destination.location} - {destination.days}{" "}
            days - {destination.amount} - {destination.description} - Minimum{" "}
            {destination.minimumPeople} people - {destination.tourType} -
            Points: {destination.tourPoints}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Destinationapi;
