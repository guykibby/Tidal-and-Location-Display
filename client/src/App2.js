import React, { useState, useEffect } from "react";

function App2() {
  const [tidalArray, setTidalArray] = useState([
    0, 0.707, 1, 0.707, 0, -0.707, -1, -0.707, 0, 0.707, 1, 0.707, 0, -0.707,
    -1, -0.707,
  ]);

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
    <div className="tidalData">
      {tidalArray.map((e, index) => (
        <p key={index}>{e}</p>
      ))}
    </div>
  );
}

export default App2;
