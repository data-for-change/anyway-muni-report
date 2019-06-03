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
import { LocationCity } from '@material-ui/icons';
export const MunicipalityIcon = LocationCity;

const MunicipalityFilter = props => (
  <Filter {...props}>
    {/* <TextInput
      label="Search osm_id"
      source="osm_id"
      alwaysOn
      parse={v => {
        if (v !== undefined) {
          return Number(v);
        }
      }}
      format={v => {
        return v;
      }}
    /> */}
    <TextInput label="Search MUN_ENG" source="MUN_ENG" alwaysOn />
    <TextInput label="Search MUN_HEB" source="MUN_HEB" alwaysOn />
    <TextInput label="Search type" source="type" alwaysOn />
    <TextInput label="Search file_name" source="file_name" alwaysOn />
    <TextInput label="Search name" source="name" alwaysOn />
  </Filter>
);

export const MunicipalityList = props => (
  <List filters={<MunicipalityFilter />} {...props}>
    <Datagrid rowClick={'show'}>
      <TextField source="id" />
      <TextField source="osm_id" />
      <TextField source="MUN_ENG" />
      <TextField source="MUN_HEB" />
      <TextField source="type" />
      <TextField source="file_name" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

const MunicipalityTitle = ({ record }) => {
  return <span>Municipality {record ? `"${record.MUN_HEB}"` : ''}</span>;
};

export const MunicipalityShow = props => {
  return (
    <Show title={<MunicipalityTitle />} {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="osm_id" />
        <TextField source="MUN_ENG" />
        <TextField source="MUN_HEB" />
        <TextField source="type" />
        <TextField source="file_name" />
        <TextField source="name" />
        <FunctionField
          label="Map"
          render={record => {
            const urlForPolygon = `https://anyway-postgrest.herokuapp.com/municipalities_with_polygon_also_as_geom_string?select=polygon_as_geojson&id=eq.${
              record.id
            }&offset=0&limit=1`;

            const urlForIframe = `https://flowmap-for-anyway.netlify.com/?postgrestKombina=${encodeURIComponent(
              urlForPolygon
            )}`;

            return (
              <iframe
                title="map of the polygon"
                width="800"
                height="500"
                src={urlForIframe}
              />
            );
          }}
        />
      </SimpleShowLayout>
    </Show>
  );
};

// export const MunicipalityEdit = props => (
//   <Edit title={<MunicipalityTitle />} {...props}>
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

// export const MunicipalityCreate = props => (
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
