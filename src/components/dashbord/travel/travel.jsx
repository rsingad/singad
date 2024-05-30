import React from "react";
import { useState } from "react";
function Travel() {
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
          <section className="mb-4">
            <h2>Choose Transport Type</h2>
            <div className="btn-group" role="group" aria-label="Transport Type">
              <button
                type="button"
                className={`btn ${
                  transportType === "bus" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => setTransportType("bus")}
              >
                Bus
              </button>
              <button
                type="button"
                className={`btn ${
                  transportType === "car" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => setTransportType("car")}
              >
                Car
              </button>
              <button
                type="button"
                className={`btn ${
                  transportType === "flight" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => setTransportType("flight")}
              >
                Flight
              </button>
              <button
                type="button"
                className={`btn ${
                  transportType === "train" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => setTransportType("train")}
              >
                Train
              </button>
            </div>
          </section>

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
export default Travel;
