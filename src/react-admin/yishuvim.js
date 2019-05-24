// in posts.js
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  TextInput,
  Filter,
  Show,
  SimpleShowLayout,
  FunctionField
} from 'react-admin';
import AccidentsByAge from '../pages/HomePage/AccidentsByAge';
import AccidentsByStreet from '../pages/HomePage/AccidentsByStreet';
import AccidentsByYear from '../pages/HomePage/AccidentsByYear';
import { Grid } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { LocationCity } from '@material-ui/icons';
export const YishuvIcon = LocationCity;
// yishuv_symbol
// 	yishuv_name
// 	region_hebrew
// 	region
// 	natural_area_hebrew
// 	natural_area
// 	municipal_status_hebrew
// 	municipal_status
// 	geo_area_hebrew
// 	geo_area
// 	district_hebrew
// 	district

const YishuvFilter = props => (
  <Filter {...props}>
    <TextInput label="Search yishuv_name" source="yishuv_name" alwaysOn />
    <TextInput label="Search region_hebrew" source="region_hebrew" alwaysOn />
    <TextInput label="Search region" source="region" alwaysOn />
  </Filter>
);

export const YishuvList = props => (
  <List filters={<YishuvFilter />} {...props}>
    <Datagrid rowClick={'show'}>
      <TextField source="id" />
      <TextField source="yishuv_symbol" />
      <TextField source="yishuv_name" />
      <TextField source="region_hebrew" />
      <TextField source="region" />
    </Datagrid>
  </List>
);

const YishuvTitle = ({ record }) => {
  return <span>Yishuv {record ? `"${record.yishuv_name}"` : ''}</span>;
};

export const YishuvShow = props => {
  return (
    <Show title={<YishuvTitle />} {...props}>
      <SimpleShowLayout>
        <FunctionField
          label={'Overview'}
          render={record => {
            return (
              <>
                <Grid container spacing={24}>
                  <Grid item md={12} xs={12} sm={12} lg={12} xl={12}>
                    <Card
                      style={{
                        marginBottom: '10px',
                        height: '300px',
                        direction: 'rtl'
                      }}
                    >
                      <AccidentsByStreet yishuv_symbol={record.yishuv_symbol} />
                    </Card>
                  </Grid>
                  <Grid item md={12} xs={12} sm={12} lg={12} xl={12}>
                    <Card style={{ marginBottom: '10px', height: '300px' }}>
                      <AccidentsByAge />
                    </Card>
                  </Grid>
                </Grid>
                <Grid container spacing={24}>
                  <Grid item md={12} xs={12} sm={12} lg={12} xl={12}>
                    <Card style={{ marginBottom: '10px', height: '300px' }}>
                      <AccidentsByYear yishuv_symbol={record.yishuv_symbol} />
                    </Card>
                  </Grid>
                  <Grid item md={12} xs={12} sm={12} lg={12} xl={12}>
                    <Card style={{ marginBottom: '10px', height: '300px' }} />
                  </Grid>
                </Grid>
              </>
            );
          }}
        />
        <FunctionField
          label={'raw data debug'}
          render={record => {
            return JSON.stringify(record);
          }}
        />
      </SimpleShowLayout>
    </Show>
  );
};

// export const YishuvEdit = props => (
//   <Edit title={<YishuvTitle />} {...props}>
//     <SimpleForm>
//       <DisabledInput source="id" />
//       <TextInput source="osm_id" />
//       <TextInput source="teaser" options={{ multiLine: true }} />
//       <LongTextInput source="body" />
//       <DateInput label="Publication date" source="published_at" />
//       <TextInput source="average_note" />
//       <DisabledInput label="Nb views" source="views" />
//     </SimpleForm>
//   </Edit>
// );

// export const YishuvCreate = props => (
//   <Create title="Create a Post" {...props}>
//     <SimpleForm>
//       <TextInput source="title" />
//       <TextInput source="teaser" options={{ multiLine: true }} />
//       <LongTextInput source="body" />
//       <TextInput label="Publication date" source="published_at" />
//       <TextInput source="average_note" />
//     </SimpleForm>
//   </Create>
// );
