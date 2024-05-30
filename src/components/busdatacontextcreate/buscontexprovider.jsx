import { Buscontexcreat } from "./buscreatcontex";
import React from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";
function Buscontexprovider({ children }) {
  let [apiData, setapiData] = useState([]);

  const businfo = [
    {
      photo: "xxx",
      number: "9999",
      type: "bus",
      // source:"jaislmer",
      // destination:"",
      all_des: [
        {
          source: "jaislmer",
          deatation: "jodhpur",
        },
        {
          source: "jodhpur",
          deatation: "jaipur",
        },{
          source: "jaislmer",
          deatation: "jaipur",
        },
        {
          source: "joipur",
          deatation: "ajmer",
        },
        {
          source: "ajmer",
          deatation: "bikaner",
        }
      ],
    },
  ];
  return (
    <Createcntxt.Provider value={businfo}>{children}</Createcntxt.Provider>
  );
}
export { Buscontexprovider };
