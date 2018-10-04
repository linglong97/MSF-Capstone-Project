import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import { BarChart } from "react-chartjs";

var Prefs = React.createClass({
  render: function() {
    return (
      <div key="reports" className="reports-page">
        <div className="ng-scope"> 
          <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Overview</Link> 
          <h2>Your Preferences</h2>
          <Jumbotron> 
            <h1>Add Charts here</h1> 
            <p>You can use C3.js or Chart.js</p> 
            <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
          </Jumbotron> 
        </div>
        <div className = "row">
            <Jumbotron className = "half two">
                <h1> Chart1 Here </h1>
            </Jumbotron>
            <Jumbotron className = "half">
                <h1> Chart2 Here </h1>
            </Jumbotron>
        </div>
      </div>
      
    );
  }

});

export default Prefs;