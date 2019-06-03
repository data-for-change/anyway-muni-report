import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Grid from '@material-ui/core/Grid';

import AccidentsByAge from './AccidentsByAge';
import AccidentsByYear from './AccidentsByYear';
import AccidentsByStreet from './AccidentsByStreet';

class HomePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card
          className={classes.card}
          style={{ marginBottom: '20px', height: '400px', padding: 0 }}
        >
          <CardContent style={{ padding: 0 }}>
            <Map
              google={this.props.google}
              zoom={14}
              initialCenter={{
                lat: 32.0126483,
                lng: 34.7412131
              }}
            >
              <Marker
                onClick={this.onMarkerClick}
                name={'Current location'}
                position={{ lat: 32.0126483, lng: 34.7412131 }}
              />

              {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
              {/* </InfoWindow> */}
            </Map>
          </CardContent>
        </Card>
        {/* </Grid> */}

        <Grid container spacing={24}>
          <Grid item md>
            <Card style={{ marginBottom: '10px', height: '300px' }}>
              <AccidentsByStreet yishuv_symbol={6200} />
            </Card>
          </Grid>

          <Grid item md>
            <Card style={{ marginBottom: '10px', height: '300px' }}>
              <AccidentsByAge />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item md>
            <Card style={{ marginBottom: '10px', height: '300px' }}>
              <AccidentsByYear yishuv_symbol={6200} />
            </Card>
          </Grid>
          <Grid item md>
            <Card style={{ marginBottom: '10px', height: '300px' }} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBpOmft-UskZsAQth9vNl0fN6EXaRR6dZc'
})(HomePage);
