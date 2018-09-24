import React, {Component} from 'react';
import {API_URL} from './constants'
import Home from '../presentational/Home';

export default class FetchOrders extends Component {
    constructor(props) {
      super(props);
      this.state = {
        orders: []
      };
    }

    // componentDidMount() {
    //   fetch(API_URL+'/orders')
    //     .then(response => response.json())
    //     .then(orders => this.setState({ orders }));
    // }
    
    componentDidMount() {
      this.timer = setInterval(()=> this.getOrders(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timer)
      this.timer = null; // here...
    }
    
    getOrders(){
      fetch(API_URL+'/orders')
        .then(response => response.json())
        .then(orders => this.setState({ orders }));
    }

    render() {
      console.log('1')
      return(
        <Home orders={this.state.orders}/>
      )
    }
  }


