import React, { Component, Fragment } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Map from '../../components/Map/Map';
import FriendBar from '../../components/FriendBar/FriendBar';
import Navbar from '../../components/Navbar/Navbar';
import { purple } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: {
      // Light color (almost white)
      main: '#F8F6F6',
    },
    secondary: {
      // Orange
      main: '#fb8c00',
    },
  },
});


class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Fragment>
        <ThemeProvider theme={theme}>
          <Navbar color="primary" />
        </ThemeProvider>
        
        <div className="container">
          <div className="content"
               style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
          >
            <FriendBar />
            <Map />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
