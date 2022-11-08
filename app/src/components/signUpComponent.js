import React, { Component } from 'react';
import app from "./firebaseConfig";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const auth = getAuth(app);
export default class SignUp extends Component {
  constructor(props){
    super (props);
    this.state={
      fname: "",
      lname: "",
      mobile: "",
      password: "",
      verifyOtp: false,
      verifyButton: false,
      otp: "",
      verified: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCaptchVerify = this.onCaptchVerify.bind(this);
    this.onSignInSubmit = this.onSignInSubmit.bind(this);
    this.verifyCode = this.verifyCode.bind(this);
    this.changeMobile = this.changeMobile.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.verified) {
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
          if(data.status==="ok"){ 
            alert("Account Created");
            window.localStorage.setItem("token", data.data);
            window.location.href = "./userDetails";
          }else{
            alert("User Already Exists");
          }
        });
    } else {
      alert("Please Verify Mobile");
    }
  }

  onCaptchVerify(e){
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
        this.onSignInSubmit();
      },
    }, auth);
    
  }

  onSignInSubmit(e){
    this.onCaptchVerify();
    const phoneNumber = "+91" + this.state.mobile;
    const appVerifier = window.recaptchaVerifier;
    console.log(phoneNumber);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          alert("OTP Sended");
          this.setState({ verifyOtp: true });
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
        });
  }

  verifyCode(e){
    window.confirmationResult.confirm(this.state.otp).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user);
      alert("Verification Successfull")
      this.setState({
        verified: true,
        verifyOtp: false,
      })
      // ...
    }).catch((error) => {
      alert("Invalid OTP")
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  changeMobile(e){
    this.setState({mobile: e.target.value}, function(){
      if(this.state.mobile.length === 10 ){
        this.setState({ verifyButton: true, });
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>
        <div id="recaptcha-container"></div>

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
            type="number"
            className="form-control"
            placeholder="Enter Mobile Number"
            onChange={(e)=>this.changeMobile(e)}
          />
          {this.state.verifyButton ?
          <input 
            type="button"
            value={this.state.verified ? "Verified" : "Verify"}
            onClick={this.onSignInSubmit}
            style={{
              backgroundColor:"#0163d2",
              width:"100%",
              padding:"8",
              color:"white", 
              border:"none",
              borderRadius: "50% 0%",
              }}
            /> 
            : null}
        </div>

        <div className="mb-3">
          <label>OTP</label>
          <input
            type="number" min="000000" max="999999"
            className="form-control"
            placeholder="Enter OTP"
            onChange={(e)=>this.setState({otp: e.target.value})}
          />
          {this.state.verifyOtp?
          <input 
            type="button"
            value="verify"
            onClick={this.verifyCode}
            style={{
              backgroundColor:"#0163d2",
              width:"100%",
              padding:"8",
              color:"white", 
              border:"none",
              borderRadius: "50% 0%",
              }}
            />:null}
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