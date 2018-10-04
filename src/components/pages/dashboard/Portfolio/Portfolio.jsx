import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Tabs, Tab} from 'react-bootstrap';
import { BarChart } from "react-chartjs";
import { Line } from 'react-chartjs-2';
import Layout from "./chart";


var portfolio = React.createClass({
  render: function() {
    return (
      <div key="reports" className="reports-page">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Portfolio 1">
                <div className="ng-scope"> 
                    <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Home Page</Link> 
                    <h2>Portfolio 1</h2> 

                    <i className="glyphicon glyphicon-dashboard bg-fade"></i>
                    <Jumbotron> 
                        <h1>Filler</h1> 
                        <p>Charts here</p> 
                        <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
                    </Jumbotron> 
                </div>
                <Layout />
            </Tab>
            <Tab eventKey={2} title="Portfolio 2">
                <div className="ng-scope"> 
                    <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Home Page</Link> 
                    <h2>Portfolio 2</h2> 

                    <i className="glyphicon glyphicon-dashboard bg-fade"></i>
                    <Jumbotron> 
                        <h1>Filler</h1> 
                        <p>Charts here</p> 
                        <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
                    </Jumbotron> 
                </div>
            </Tab>
            <Tab eventKey={3} title="Portfolio 3" disabled>
                <div className="ng-scope"> 
                    <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Home Page</Link> 
                    <h2>Portfolio 3</h2> 

                    <i className="glyphicon glyphicon-dashboard bg-fade"></i>
                    <Jumbotron> 
                        <h1>Filler</h1> 
                        <p>Charts here</p> 
                        <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
                    </Jumbotron> 
                </div>
            </Tab>
        </Tabs>
      </div> 
      
    );
  }

});

export default portfolio;