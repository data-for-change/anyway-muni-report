import React, { Component } from 'react';
import HomeIcon from '@material-ui/icons/Home';

class LoginButton extends Component {
  handleClick = () => {
    console.log('this is:', this);
  };

  render() {
    return (
      <a href="http://localhost:3000/login" onClick={this.handleClick}>
        <HomeIcon
          style={{ cursor: 'pointer', position: 'relative', left: '-84%' }}
        />
      </a>
    );
  }
}
export default LoginButton;
