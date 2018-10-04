import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import { BarChart } from "react-chartjs";
import { Line } from 'react-chartjs-2';
import { Container } from 'mdbreact';
import Chart from "./chart";

var portfolio = React.createClass({
  render: function() {
    return (
      <div key="reports" className="reports-page">
        <div className="ng-scope"> 
          <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Home Page</Link> 
          <h2>Your Portfolio</h2> 

          <i className="glyphicon glyphicon-dashboard bg-fade"></i>
          <Jumbotron> 
            <h1>Filler</h1> 
            <p>Chart.js or the other thing</p> 
            <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
          </Jumbotron> 
          <Chart>
          </Chart>
        </div>
      </div>
      
    );
  }

});

export default portfolio;