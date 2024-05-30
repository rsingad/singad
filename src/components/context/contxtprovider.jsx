import { Createcntxt } from "./createcontext";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function ContextProvider({ children }) {
  let [apiData, setapiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://65a0ef06600f49256fb08ab2.mockapi.io/users")
      .then((response) => {
        setapiData(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(apiData);
  return (
    <Createcntxt.Provider value={apiData}>{children}</Createcntxt.Provider>
  );
}
export { ContextProvider };
