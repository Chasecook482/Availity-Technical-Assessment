import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./App";
import Table from '@mui/material/Table';

//import "./styles.css";
const LOCAL_STORAGE_KEY = 'tableData'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  addPerson(firstName, lastName, npiNumber, businessAddress, phoneNumber, email) {
    this.setState(prevState => ({
      people: [...prevState.people, { firstName, lastName, npiNumber, businessAddress, phoneNumber, email }]
    }));
  }

  deletePerson(npiNumber) {
    return () => {
      this.setState(prevState => ({
        people: prevState.people.filter(person => person.npiNumber !== npiNumber)
      }));
    };
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Form addPerson={this.addPerson} />
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>NPI Number</th>
              <th>Business Address</th>
              <th>Telephone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person, index) => {
              return (
                <tr key={person.npiNumber}>
                  <td align="center">{person.firstName}</td>
                  <td align="center">{person.lastName}</td>
                  <td align="center">{person.npiNumber}</td>
                  <td align="center">{person.businessAddress}</td>
                  <td align="center">{person.phoneNumber}</td>
                  <td align="center">{person.email}</td>
                  <td align="center">
                    <button onClick={this.deletePerson(person.npiNumber)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
