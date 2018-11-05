import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'react-bootstrap';
import {Bar} from "react-chartjs-2";
import "chartjs-plugin-annotation";
var options = {
  annotation: {
       annotations: [{
           drawTime: 'afterDatasetsDraw',
           borderColor: 'red',
           borderDash: [2, 2],
           borderWidth: 2,
           mode: 'vertical',
           type: 'line',
           value: 10,
           scaleID: 'x-axis-0',
     }]
  },
  maintainAspectRation: false
};
var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
      {
          label: "My First dataset",
          fill: false,
          pointHoverRadius: 5,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
          spanGaps: false,
      }
  ]
};
var Prefs = React.createClass({
  render: function() {
    return (
      <div key="reports" className="reports-page">
        <div className="ng-scope"> 
          <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Overview</Link> 
          <h2>Construct an improved portfolio based on your current portfolio</h2>
          <Jumbotron> 
            <h1>Enter your current portfolio details here</h1> 
            <p>Some useful information</p> 
            <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
          </Jumbotron> 
        </div>
        <div className = "row">
            <Jumbotron className = "half two">
                <h2> Example of improved portfolio</h2>
                
            </Jumbotron>
            <Jumbotron className = "half">
                <h2> Example of improved past portfolio</h2>
            </Jumbotron>
        </div>
      </div>
    );
  }

});

export default Prefs;

