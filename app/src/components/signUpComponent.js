import React, { Component } from 'react'

export default class SignUp extends Component {
  constructor(props){
    super (props);
    this.state={
      fname: "",
      lname: "",
      mobile: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { fname, lname, mobile, password } = this.state;
    fetch("http://localhost:4000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          lname,
          mobile,
          password,
        }),
      }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e)=>this.setState({fname: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Last name" 
            onChange={(e)=>this.setState({lname: e.target.value})}/>
        </div>

        <div className="mb-3">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Mobile Number"
            onChange={(e)=>this.setState({mobile: e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your Password"
            onChange={(e)=>this.setState({password: e.target.value})}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}