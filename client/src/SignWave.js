import React from "react";

function SignWave({ data }) {
  let tidalArray = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < 12; j++) {
      if (j <= data[i][1] * 10) {
        tidalArray.push(<div key={i * 12 + j} className="gridBox on"></div>);
      } else {
        tidalArray.push(<div key={i * 12 + j} className="gridBox off"></div>);
      }
    }
  }
  return <div className="tidalGrid">{tidalArray}</div>;
}

export default SignWave;
