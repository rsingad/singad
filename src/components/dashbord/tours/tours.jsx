import React from "react";
import { useState } from "react";
function Tour() {
  const [transportType, setTransportType] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  // Function to handle search
  const handleSearch = () => {
    // Perform search based on transportType, source, and destination
    console.log("Searching...");
  };
  return (
    <>
      <section>
        <div className="container mt-5">
          {/* Transport type selection section */}
          {/* Source and destination input section */}
          <section>
            <h2>Source and Destination</h2>
            <div className="mb-3">
              <label htmlFor="source" className="form-label">
                Source:
              </label>
              <input
                type="text"
                className="form-control"
                id="source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="destination" className="form-label">
                Destination:
              </label>
              <input
                type="text"
                className="form-control"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </section>

          {/* Search button */}
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </section>
    </>
  );
}
export default Tour;
