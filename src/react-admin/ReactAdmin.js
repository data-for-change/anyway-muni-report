import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from 'aor-postgrest-client';

import {
  MunicipalityList,
  MunicipalityEdit,
  MunicipalityCreate,
  MunicipalityIcon,
  MunicipalityShow
} from './municipalities';

import { YishuvList, YishuvIcon, YishuvShow } from './yishuvim';

import somecss from './somecss.module.css';

export function ReactAdminTopLevel() {
  return (
    <Admin
      // dataProvider={dataProvider.postgrestClient(
      //   'https://anyway-postgrest.herokuapp.com'
      // )}
      dataProvider={dataProvider('https://anyway-postgrest.herokuapp.com')}
    >
      <Resource
        options={{ label: 'Yishuvim' }}
        name="yishuvim_list_by_distinct_on_markers_hebrew_materialized"
        list={YishuvList}
        icon={YishuvIcon}
        show={YishuvShow}
      />
      <Resource
        options={{ label: 'Municipalities' }}
        name="municipalities"
        list={MunicipalityList}
        icon={MunicipalityIcon}
        show={MunicipalityShow}
      />
    </Admin>
  );
}
