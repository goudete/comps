import React, { Component, Fragment } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from '../../components/Navbar/Navbar';


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
  

class Profile extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <h1>Enrique Goudet</h1>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <h1>Mammoth</h1>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Profile;

