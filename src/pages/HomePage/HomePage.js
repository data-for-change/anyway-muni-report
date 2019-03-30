import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';
import Table from './Table';
import TableTabulator from'./TableTabulator';

import data from './../../assets/batyam-accidents-per-street.json';

class HomePage extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>    
            <Card className={classes.card} style={{marginBottom: '20px', height: '400px'}}>
                <CardContent>
                        <Map google={this.props.google} zoom={14} initialCenter={{
            lat: 32.0126483,
            lng: 34.7412131
          }}>

                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'}
                                position={{lat: 32.0126483, lng: 34.7412131}}
                                 />

                            {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
                            {/* </InfoWindow> */}
                        </Map>
                 </CardContent>
            </Card>
        {/* </Grid> */}

        <Grid container spacing={24}>
            <Grid item lg>
                <Card style={{marginBottom: '10px', height: '300px'}}>
                <Table columns={[
    { Header: "עיר", accessor: "yishuv_name" },
    { Header: "רחוב", accessor: "street1_hebrew" },
    { Header: "מספּר תאונות", accessor: "count" },
  ]} data={data}/>
                {/* <TableTabulator columns={[
    { title: "עיר", field: "yishuv_name", align:'right' },
    { title: "רחוב", field: "street1_hebrew", align:'right' },
    { title: "מספּר תאונות", field: "count", align:'right' },
  ]} data={data}/> */}
  
                </Card>
            </Grid>
        </Grid>

        <Grid container spacing={24}>
         <Grid item xs>
              <Card style={{marginBottom: '10px', height: '300px'}}>
                  <Chart title='גילאי נפּגעים' type='pie' data={[[1, "0-18"], [1, "19-35"], [3, "36-65"],  [4, "66-99"],[0, "99+"] ]} />
              </Card>
        </Grid>
        <Grid item xs>
          <Card style={{marginBottom: '10px', height: '300px'}}>
          <Chart title='גילאי נהגים' type='pie' data={[[1, "0-18"], [1, "19-35"], [3, "36-65"],  [4, "66-99"],[0, "99+"] ]} />
              
          </Card>
        </Grid>
        <Grid item xs>
          <Card style={{marginBottom: '10px', height: '300px'}}></Card>
        </Grid>
      </Grid> 


    
    
    </div>
       )
    }
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBpOmft-UskZsAQth9vNl0fN6EXaRR6dZc")
})(HomePage)