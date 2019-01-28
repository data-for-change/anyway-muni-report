import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class ListItemHoverable extends Component {

    state = {
        hover: false,
    }

    hoverOn = () =>{
        this.setState({hover: true })
    }

    hoverOff = () =>{
        this.setState({hover: false })
    }

    render (){
        const {icon, title} = this.props;
        return  (<ListItem style={{ background: this.state.hover ? '#2196f3' : 'inherit'}}
            onMouseEnter={this.hoverOn} 
            onMouseLeave={this.hoverOff}
            selected={this.state.hover}
        >
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText style={{textAlign: "right", cursor: "pointer", color: this.state.hover ? 'white !important' : 'inherit'}}
             onMouseEnter={this.hoverOn} 
             onMouseLeave={this.hoverOff}
             >
                 {title}
            </ListItemText>
        </ListItem>);

        } 
    }

export default ListItemHoverable;