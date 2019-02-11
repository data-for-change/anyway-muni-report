import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';


class HomePage extends Component {
    render() {
        const { classes } = this.props;
        const style = {
            // width: '100vh',
            height: '100%',
            display: 'contents !important',
            position: 'static !important'
          };
        return (
            <Card className={classes.card} >
                <CardContent>
                        <Map google={this.props.google} zoom={14} style={style}>

                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                            {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
                            {/* </InfoWindow> */}
                        </Map>
                 </CardContent>
            </Card>
        )
    }
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBpOmft-UskZsAQth9vNl0fN6EXaRR6dZc")
})(HomePage)