import React from 'react';
import LineChart from '../../components/LineChart';

import staticData from './../../assets/bat_yam_pedestrians_count_per_year.json';

import { useFetch } from 'react-async';

const formattedData = dataToFormat => {
  const uniqueSeries = [
    ...new Set(dataToFormat.map(d => d.injury_severity_hebrew))
  ];
  return uniqueSeries.map(d => ({
    id: d,
    data: dataToFormat
      .filter(o => o.injury_severity_hebrew === d)
      .map(a => ({ x: a.accident_year, y: a.count }))
  }));
};

function AccidentsByYear({ yishuv_symbol }) {
  const qs = new URLSearchParams();

  qs.append('injury_severity', 'gt.0');
  qs.append('yishuv_symbol', `eq.${yishuv_symbol}`);
  qs.append('accident_type', 'eq.1');

  const headers = { Accept: 'application/json' };
  const { data, error, isLoading, run } = useFetch(
    `https://anyway-postgrest.herokuapp.com/pedestrians_count_per_year_materiazlied?${qs.toString()}`,
    { headers },
    {}
  );

  if (isLoading) {
    return 'isLoading';
  }

  if (error) {
    return 'error' + error.message;
  }

  return (
    <React.Fragment>
      <h3 style={{ textAlign: 'center' }}>Number of Accidents per Year</h3>
      <LineChart data={formattedData(data)} legendY={'count'} />
    </React.Fragment>
  );
}

export default AccidentsByYear;
