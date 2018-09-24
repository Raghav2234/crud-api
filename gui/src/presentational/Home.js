import React, { Component } from 'react';
import Card from './Card'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './Home.css'

class Home extends Component {
  
  renderCards = () => 
    this.props.orders.map((value, index) => {
      return (
        <Grid  key={index} item xs={6}>
          <Card info={value}/>
        </Grid>
      )
    })
  

  render() {
    return (
      <div className="App">
        <Typography color ="textPrimary" variant="display3" gutterBottom>
          Restaurant DashBoard
        </Typography>

        <div style={{maxWidth: '60vw', display: 'flex'}}>
          <Grid container spacing={16}>
            {this.renderCards()}
          </Grid>
        </div>        
      </div>
    );
  }
}

export default Home;
