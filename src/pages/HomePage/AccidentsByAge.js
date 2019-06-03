import React from "react";
import PieChart from "../../components/PieChart";

import data from "./../../assets/bat_yam_pedestrians_count_per_age_group.json";

function AccidentsByAge() {
  const formattedData = data.map(d => ({
    id: d.age_group_hebrew,
    value: d.count,
    label: `Age group ${d.age_group_hebrew}`
  }));

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Number of Accidents by Age Group</h3>
      <PieChart data={formattedData} />
    </>
  );
}

export default AccidentsByAge;
