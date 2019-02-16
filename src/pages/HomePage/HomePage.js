import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
const green = '#39D1B4';

class HomePage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
        {/* <Grid> */}
            <Card className={classes.card} style={{marginBottom: '20px', height: '400px'}}>
                <CardContent>
                        <Map google={this.props.google} zoom={14}>

                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                            {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
                            {/* </InfoWindow> */}
                        </Map>
                 </CardContent>
            </Card>
        {/* </Grid> */}
        <Grid container spacing={24}>
            <Grid item lg>
                <Card style={{marginBottom: '10px', height: '300px'}}></Card>
            </Grid>
        </Grid>

        <Grid container spacing={24}>
         <Grid item xs>
              <Card style={{marginBottom: '10px', height: '300px'}}></Card>
        </Grid>
        <Grid item xs>
          <Card style={{marginBottom: '10px', height: '300px'}}></Card>
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