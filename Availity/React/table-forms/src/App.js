import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //First Name
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstName"] = "Must only contain letters";
      }
    }

    //Last Name
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastName"] = "Must only contain letters";
      }
    }

    //NPI Number
    if (!fields["npiNumber"]) {
      formIsValid = false;
      errors["npiNumber"] = "Cannot be empty";
    }

    if (typeof fields["npiNumber"] !== "undefined") {
      if (!fields["npiNumber"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["npiNumber"] = "Must be a 10 digit number";
      }
    }

    //Business Address
    if (!fields["businessAddress"]) {
      formIsValid = false;
      errors["businessAddress"] = "Cannot be empty";
    }

    if (typeof fields["businessAddress"] !== "undefined") {
      if (!fields["businessAddress"].match(/[A-Za-z0-9]/)) {
        formIsValid = false;
        errors["businessAddress"] = "Must be only letters and number";
      }
    }

    //Phone Number
    if (!fields["phoneNumber"]) {
      formIsValid = false;
      errors["phoneNumber"] = "Cannot be empty";
    }

    if (typeof fields["phoneNumber"] !== "undefined") {
      if (!fields["phoneNumber"].match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
        formIsValid = false;
        errors["phoneNumber"] = "Phone Numbers must be between 10 and 12 digits";
      }
    }
    
    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      if (!fields["email"].match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        formIsValid = false;
        errors["email"] = "Must be a valid email";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  formSubmit(event) {
    event.preventDefault();
    if(this.handleValidation()){
      alert("Form submitted");
      const form = event.target;
      const firstName = form.elements["firstName"].value;
      const lastName = form.elements["lastName"].value;
      const npiNumber = form.elements["npiNumber"].value;
      const businessAddress = form.elements["businessAddress"].value;
      const phoneNumber = form.elements["phoneNumber"].value;
      const email = form.elements["email"].value;
      this.props.addPerson(firstName, lastName, npiNumber, businessAddress, phoneNumber, email);
      form.reset();
      
    }else{
      alert("Form has errors.")
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit} align="center" display="flex">
        {/* <input id="name" type="text" defaultValue="" placeholder="Name..." />
        <input id="email" type="text" defaultValue="" placeholder="Email..." /> */}
        {/* <input type="submit" value="submit" /> */}
        <div style={{display: 'flex', justifyContent:'center'}}>
          <img src={"https://www.availity.com/-/media/Images/Global/_AV-Logo-CMYK.ashx?h=600&w=1800&hash=094EC7FEEF08F8E1893A1EE6A3F4E89E"} height={75} width={200}/>
          <h1>User Registry</h1>
        </div>
        <h6>*Unofficial App for training purposes*</h6>

        <fieldset>
          <label>First Name <input ref = "firstName" type = "text" id="firstName" defaultValue="" placeholder="First Name..." onChange={this.handleChange.bind(this, "firstName")} value={this.state.fields["firstName"]}/></label>
          <span className="error"> &nbsp; {this.state.errors["firstName"]}</span>
          <br/>
          <label>Last Name <input ref = "lastName" type = "text" id="lastName" defaultValue="" placeholder="Last Name..." onChange={this.handleChange.bind(this, "lastName")} value={this.state.fields["lastName"]}/></label>
          <span className="error"> &nbsp; {this.state.errors["lastName"]}</span>
          <br/>
          <label>NPI Number <input ref = "npiNumber" type = "number" id="npiNumber" defaultValue="" placeholder="NPI Number..." onChange={this.handleChange.bind(this, "npiNumber")} value={this.state.fields["npiNumber"]}/></label>
          <span className="error"> &nbsp; {this.state.errors["npiNumber"]}</span>
          <br/>
          <label>Business Address <input ref = "businessAddress" type = "text" id="businessAddress" defaultValue="" placeholder="Business Name..." onChange={this.handleChange.bind(this, "businessAddress")} value={this.state.fields["businessAddress"]}/></label>
          <span className="error"> &nbsp; {this.state.errors["businessAddress"]}</span>
          <br/>
          <label>Telephone Number <input ref = "phoneNumber" type = "text" id="phoneNumber" defaultValue="" placeholder="Phone Number..."onChange={this.handleChange.bind(this, "phoneNumber")} value={this.state.fields["phoneNumber"]} /></label>
          <span className="error"> &nbsp; {this.state.errors["phoneNumber"]}</span>
          <br/>
          <label>Email Address <input ref = "email" type = "text" id="email" defaultValue="" placeholder="Email..." onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/></label>
          <span className="error"> &nbsp; {this.state.errors["email"]}</span>
          <br/>
        </fieldset>
        <button id="submit" value="Submit"> Submit </button>
      </form>
    );
  }
}

export default Form;
