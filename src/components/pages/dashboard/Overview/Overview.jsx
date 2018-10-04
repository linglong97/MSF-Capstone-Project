import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Navbar} from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="overview-page" key="overview"> 
        <Link to="/dashboard/reports" className="pull-right btn btn-primary btn-outline btn-rounded">Reports</Link> 
        <h2>Overview <small> Welcome to Money Rocket</small></h2> 
        <Jumbotron> 
          <h1>Welcome!</h1> Making money doesn't have to be hard. We make it easy for you to build a portfolio and view how you're doing.
          <br /><br /> 
          <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
        </Jumbotron> 
      </div>
      
    );
  }

});

export default Blank;
