import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {API_URL} from '../containers/constants'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class OutlinedButtons extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      color: 'primary',
      btntext: 'Confirm Order'
    };
  }
  componentDidMount(){
    if(this.props.accepted === false){
      this.setState({color: 'primary', btntext:'Confirm Order'})
    }
    else {
      this.setState({color: 'secondary', btntext:'Confirmed'})
    }
  }
  handleClick(e) {
    if(this.state.btntext === 'Confirmed') return
    fetch(API_URL+`/orders/acceptbyid/${this.props._id}`)
        .then(response => response.json())
        .then(() => this.setState({color: 'secondary', btntext:'Confirmed'}));
  }
  render(){
    const { classes } = this.props;
    return (    
      <Button variant="outlined" color={this.state.color} className={classes.button} onClick={e => this.handleClick(e)}>
        {this.state.btntext}
      </Button>
    );
  }
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);