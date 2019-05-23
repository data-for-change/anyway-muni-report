import React from 'react';
import { Admin, Resource } from 'react-admin';
// import * as dataProvider from 'ra-postgrest-client';
import dataProvider from 'aor-postgrest-client';

import {
  MunicipalityList,
  MunicipalityEdit,
  MunicipalityCreate,
  MunicipalityIcon,
  MunicipalityShow
} from './municipalities';

import somecss from './somecss.module.css';

console.log(somecss.asd);

// window.localStorage.setItem(
//   'token',
//   'fakeToken to make ra-postgrest-client work'
// );

// window.stringify = qs => {
//   return new URLSearchParams(qs).toString();
// };

export function ReactAdminTopLevel() {
  return (
    <Admin
      // dataProvider={dataProvider.postgrestClient(
      //   'https://anyway-postgrest.herokuapp.com'
      // )}
      dataProvider={dataProvider('https://anyway-postgrest.herokuapp.com')}
    >
      <Resource
        name="municipalities"
        list={MunicipalityList}
        // edit={MunicipalityEdit}
        // create={MunicipalityCreate}
        icon={MunicipalityIcon}
        show={MunicipalityShow}
      />
    </Admin>
  );
}
