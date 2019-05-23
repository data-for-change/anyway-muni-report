import React from 'react';
import { Admin, Resource } from 'react-admin';
// import * as dataProvider from 'ra-postgrest-client';
import dataProvider from 'aor-postgrest-client';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import {
  MunicipalityList,
  MunicipalityEdit,
  MunicipalityCreate,
  MunicipalityIcon,
  MunicipalityShow
} from './municipalities';

// window.localStorage.setItem(
//   'token',
//   'fakeToken to make ra-postgrest-client work'
// );

// window.stringify = qs => {
//   return new URLSearchParams(qs).toString();
// };

const theme = createMuiTheme({
  palette: {
    type: 'dark' // Switching the dark mode on is a single property value change.
  }
});

export function ReactAdminTopLevel() {
  return (
    <Admin
      theme={theme}
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
