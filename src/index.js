import React, { Component } from "react";
import ReactDOM from "react-dom";
import SimpleTable from "./table.js";
import "./styles.css";
import cust from "./cust.json";

const data = require("./cust.json");
class App extends Component {
  constructor() {
    super();
    this.state = {
      custArr: [],
      custName: "",
      totalPoints: 0
    };
    this.getCustDetails = this.getCustDetails.bind(this);
  }
  getCustDetails() {
    var id = document.querySelector("input").value;
    if (id) {
      var custArr = cust.filter(e => e.ID === Number(id));
      if (custArr.length > 0) {
        this.setState({ custArr: custArr, custName: custArr[0].name });
      } else {
        this.setState({ custArr: [], custName: "", totalPoints: 0 });
      }
    }
  }
  table() {
    /*cust.map((cust, Id) => {
      return <h1>cust.name</h1>;
    });*/
  }
  render() {
    return (
      <div className="App">
        <h1>Gowtham Store</h1>
        <h2>Custumer reward</h2>
        <p>
          customer id{" "}
          <input type="number" name="ID" onChange={this.getCustDetails} />{" "}
        </p>
        Name: {this.state.custName}
        <SimpleTable
          data={this.state.custArr}
          totalPoints={this.state.totalPoints}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
