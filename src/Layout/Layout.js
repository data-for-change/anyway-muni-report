import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItemHoverable from './ListItemHoverable';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import PlaceIcon from '@material-ui/icons/Map';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TimelineIcon from '@material-ui/icons/Timeline';
import BusinessIcon from '@material-ui/icons/Business';
import classNames from 'classnames';
import pic from './Bat-Yam.png';
import Page from './Page';
//import { withTheme } from "@callstack/react-theme-provider";
//import { Foundation } from '@expo/vector-icons';
//import Ionicons from "react-native-vector-icons/Ionicons";
//<Foundation name="map" />

const MenuButtons = {
    button1: {
        icon: <BusinessIcon />,
        title: "דו'ח עירוני",
        divider: false
        //path:
    },

    button2: {
        icon: <TimelineIcon />,
        title: "דו'ח השוואתי",
        divider: true
        //path:
    },

    button3: {
        icon: <PlaceIcon />,
        title: "סקירת מפה",
        divider: true
        //path:
    },

    button4: {
        icon: <NotificationsIcon />,
        title: "מבזקים",
        divider: true,
        style: { textAlign: "right" }
        //path:
    },

    button5: {
        icon: <SettingsIcon />,
        title: "הגדרות משתמש",
        divider: true
        //path:
    }
}

class Layout extends Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    }
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    
     render() {
        const { children, classes } = this.props;
        const { open } = this.state;
        const MenuElements = Object.values(MenuButtons).map((value, index) => {
            const dividerElement = value.divider ? <Divider key={index + 'divider'} /> : null;
            return [<ListItemHoverable key={index} icon={value.icon} title={value.title} />, dividerElement];
        });
        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { open: this.state.open, classes:classes }));
        const citySymbolStyle = { textAlign: "center", marginBottom: "10px", marginTop: "10px" };
        return (<div>
            <AppBar position="fixed" 
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar disableGutters={!open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        עיריית בת ים
            </Typography>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <div style={citySymbolStyle}>
                        <img src={pic} alt="pic" width="100px" height="150px" />
                    </div>
                    <Divider />
                    {MenuElements}
                </List>
            </Drawer>
            <Page classes={classes} open={open}>
              {childrenWithProps}
            </Page>
        </div>)
    }
}

Layout.propTypes = {
    children: PropTypes.node,
}
export default Layout;