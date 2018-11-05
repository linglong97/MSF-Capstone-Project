import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Tabs, Tab, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import { BarChart } from "react-chartjs";
import { Line } from 'react-chartjs-2';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }
var portfolio = React.createClass({
  render: function() {
    return (
      <div key="reports" className="reports-page">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Portfolio 1">
                <div className="ng-scope"> 
                    <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Home Page</Link> 
                    <h2>Portfolio 1</h2> 
                    <Breadcrumb>
                        <BreadcrumbItem active>Home</BreadcrumbItem>
                    </Breadcrumb>
                    <i className="glyphicon glyphicon-dashboard bg-fade"></i>
                    <Jumbotron> 
                        <h1>Filler</h1> 
                        <p>Charts here</p> 
                        <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
                    </Jumbotron> 
                </div>
            </Tab>
            <Tab eventKey={2} title="Portfolio 2">
                <div className="ng-scope"> 
                    <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Home Page</Link> 
                    <h2>Portfolio 2</h2> 

                    <i className="glyphicon glyphicon-dashboard bg-fade"></i>
                    <Jumbotron> 
                        <h1>Generate a portfolio</h1> 
                        <p>Money Rocket gurantees the lowest risk portfolio for your target return.</p> 
                        <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Enter your return goal and time horizon</a> </p> 
                    </Jumbotron> 
                    <Jumbotron>
                        <form>
                            <h2>Enter the desired return of your portfolio</h2> 
                            <input type="text" name="firstname" value=""/>
                            <h2>Enter the timeframe you want to test your portfolio on</h2>
                            <input type="text" name="firstname" value=""/>
                            <div/>
                            <div/>
                            <input type = "submit" />

                        </form> 
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