import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron} from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'react-bootstrap';
import { Alert } from "reactstrap";

var Prefs = React.createClass({
  render: function() {
    return (
      <div key="reports" className="reports-page">
        <div className="ng-scope"> 
          <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Overview</Link> 
          <h2>Set your portfolio Preferences</h2>
          <Jumbotron> 
            <h1>Your Past Preferences</h1> 
            <p>Some useful information about the preferences</p> 
            <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
          </Jumbotron> 
        </div>
        <div className = "row">
            <Jumbotron className = "half two">
                <h2> Example of preferences </h2>
                
            </Jumbotron>
            <Alert color="primary">
                hello world!
            </Alert>
            <Jumbotron className = "half">
                <h2> More Preferences here</h2>
            </Jumbotron>
        </div>
      </div>
    );
  }

});

export default Prefs;

