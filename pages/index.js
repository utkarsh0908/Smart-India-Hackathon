import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Component } from 'react'
import Visibility from "@mui/icons-material/Visibility";
import { InputAdornment, IconButton, Input } from '@mui/material';
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from 'react';


export default function Home() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

    return (
      <>
      <nav class="navbar navbar-light navbar-expand-sm fixed-top ">
        <div class="container">
        <a href="/" class="navbar-brand">
          <div class ="span">Login </div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto ">
           
            <li class="nav-item">
                <a href="" class="nav-link active">
                    About Us
                </a>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link active">
                    Services
                </a>
            </li>
            
           <li class="nav-item">
                <a href="" class="nav-link active">
                    Contact us 
                </a>
            </li>
           
        </ul>
        </div>
</div>
</nav>
    <div className='main_page'>
      <img src='/bgImg.jpg' className='bgImg'/>

        <div className='main_box'>

          <div className='primary_text'>Hospital Admin Console</div>
          <div className='secondary_text'>Login to update the details</div>

          <form className='form'>
            {/* <input placeholder='Hospital Id' className='id'/> */}
            <Input placeholder='Hospital Id' className='id'/>
            <Input
            className='password'
            placeholder='Password'
            type={values.showPassword ? "text" : "password"}
            onChange={handlePasswordChange("password")}
            value={values.password}
        endAdornment={
          <InputAdornment position="end">
            <button
              className='showButton'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </button>
            
          </InputAdornment> 
        }
      />

            {/* <div>
              <input placeholder='Password' className='password' type={this.state.showPassword ? "text" : "Password"}/>
              <button onClick={() => this.setState({showPassword: !this.state.showPassword})}></button>
            </div> */}
            <button type="button" className="btn btn-primary loginButton" >Login</button>
            <div className='agreement'>By sign up you're agreeing to our <span className='terms'>Terms and Conditions</span></div>
          </form>

        </div>
      </div>
    </>
  )
}