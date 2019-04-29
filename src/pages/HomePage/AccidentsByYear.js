import React from "react";
import LineChart from "../../components/LineChart";

import data from "./../../assets/bat_yam_pedestrians_count_per_year.json"

function AccidentsByAge() {

  const formattedData = () => {
      const uniqueSeries =  [...new Set(data.map(d => d.injury_severity_hebrew))]; 
      return uniqueSeries.map(d=> ({id: d, data: 
        data.filter(o => o.injury_severity_hebrew === d)
        .map(a => ({x: a.accident_year, y: a.count})) 
    }))
  } 

  return (
    <React.Fragment>
      <h3 style={{ textAlign: "center" }}>Number of Accidents per Year</h3>
      <LineChart data={formattedData()} legendY={'count'}/>
    </React.Fragment>
  );
}

export default AccidentsByAge;
