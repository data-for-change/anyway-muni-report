import React from 'react';
import Table from '../../components/Table';

import staticData from './../../assets/bat_yam_pedestrians_count_per_street1.json';

import { useFetch } from 'react-async';

function AccidentsByStreet({ yishuv_symbol }) {
  const qs = new URLSearchParams();

  qs.append('street1_hebrew', 'neq.');
  qs.append('yishuv_symbol', `eq.${yishuv_symbol}`);
  qs.append('accident_type', 'eq.1');
  qs.append('order', 'count.desc');

  const headers = { Accept: 'application/json' };
  const { data, error, isLoading, run } = useFetch(
    `https://anyway-postgrest.herokuapp.com/pedestrians_accident_counter_per_street?${qs.toString()}`,
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
    <Table
      columns={[
        {
          Header: 'רחוב',
          columns: [
            { Header: 'רחוב', id: 'street1_hebrew', accessor: 'street1_hebrew' }
          ]
        },
        {
          Header: 'מידע',
          columns: [
            {
              id: 'accident_year',
              Header: 'שנה',
              accessor: 'accident_year'
            },
            {
              id: 'count',
              Header: 'מספּר תאונות',
              accessor: 'count',
              aggregate: vals => vals.reduce((a, b) => a + b, 0)
            }
          ]
        }
      ]}
      pivotBy={['street1_hebrew']}
      data={data}
    />
  );
}

export default AccidentsByStreet;
