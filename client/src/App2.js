import React, { useState, useEffect } from "react";
// import SignWave from "./SignWave";

function App2() {
  const [tidalArray, setTidalArray] = useState([["LOADING", "LOADING"]]);

  useEffect(() => {
    const unixDate = Date.now();
    const incOfDay = 48;
    const timeInc = (24 * 60 * 60 * 1000) / incOfDay;
    let newArray = [];

    const fetchData = async (date) => {
      const response = await fetch(
        `https://rain-mxm.begin.app/water-depth?lat=-36.1&long=174.1&date=${date}`
      );
      const data = await response.json();
      console.log(data.data);
      newArray.push([data.data.date, data.data.waterDepth]);
    };

    const setData = async () => {
      for (let i = 0; i <= incOfDay; i++) {
        const incUnixDate = unixDate + timeInc * i;
        const incIsoDate = new Date(incUnixDate).toISOString();
        await fetchData(incIsoDate);
      }
      setTidalArray(newArray);
    };

    setData();
  }, []);

  return (
    <body>
      <div className="tidalData">
        <p className="time">Time</p>
        <p className="depth"> Water Depth</p>
        {tidalArray.flatMap((e, index) => {
          const addZero = (z) => {
            if (z < 10) {
              z = "0" + z;
            }
            return z;
          };
          const dateObj = new Date(e[0]);
          const hour = addZero(dateObj.getUTCHours());
          const minute = addZero(dateObj.getUTCMinutes());
          const className = ` ${e[1] >= 0.9 ? "danger" : "noDanger"} tableBox`;
          return [
            <p
              className={className}
              key={index + 1000}
            >{`${hour}:${minute}`}</p>,
            <p className={className} key={index}>
              {e[1]}
            </p>,
          ];
        })}
      </div>
    </body>
  );
}

export default App2;
