import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import BusinessIcon from '@material-ui/icons/Business';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import classNames from 'classnames';

class Layout extends Component {
    state = {
        open: false,
      };    
      handleDrawerOpen = () => {
          this.setState({open: true});
      }
      handleDrawerClose = () => {
        this.setState({ open: false });
      };
    render() {
        const { children, classes } = this.props;
        const {open} = this.state;
        return (<div>
            <AppBar position="fixed">
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
              Persistent drawer
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
                    <ListItem>
                        <ListItemIcon>
                            <BusinessIcon/>  
                        </ListItemIcon>
                        <ListItemText>
                            דו"ח עירוני
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>{children}</div>)

    }
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout;