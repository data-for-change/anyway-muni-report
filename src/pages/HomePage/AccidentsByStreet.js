import React from "react";
import Table from "../../components/Table";

import data from "./../../assets/bat_yam_pedestrians_count_per_street1.json";

function AccidentsByStreet() {

  return  <Table
  columns={[
    { Header: "רחוב", accessor: "street1_hebrew" },
    { Header: "מספּר תאונות", accessor: "count" }
  ]}
  data={data}
/>
}

export default AccidentsByStreet;
