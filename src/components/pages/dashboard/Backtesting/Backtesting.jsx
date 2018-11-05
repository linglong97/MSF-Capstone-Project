import React, { PropTypes, Component } from 'react';
import { Link } from "react-router";
import {Jumbotron, Table} from 'react-bootstrap';
import { BarChart } from "react-chartjs";

var Buttons = React.createClass({
  render: function() {
    return (

      <div key="reports" className="reports-page">
        <div className="ng-scope"> 
          <Link to="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Overview</Link> 
          <h2>Backtesting <small>Backtest your portfolio on historical data</small></h2> 

          <i className="glyphicon glyphicon-dashboard bg-fade"></i>
          <Jumbotron> 
            <h1>Previously Backtested Portfolio here</h1> 
            <p>You can backtest on different time frames.</p> 
            <p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
          </Jumbotron> 
          <Table striped bordered condensed hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Amount of Asset</th>
      <th>Asset Ticker</th>
      <th>Name</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <th>2.20</th>
      <td>AAPL</td>
      <td>Apple</td>
      <td>Technology</td>
    </tr>
    <tr>
      <td>2</td>
      <th>1.59</th>
      <td>MSFT</td>
      <td>Microsoft</td>
      <td>Technology</td>
    </tr>
    <tr>
      <td>3</td>
      <th>0.52</th>
      <td>GOOG</td>
      <td>Google</td>
      <td>Technology</td>
    </tr>
  </tbody>
</Table>;
        </div>
      </div>
      
    );
  }

});

export default Buttons;