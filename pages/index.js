import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState , useHistory } from 'react'
import { NextResponse, NextRequest } from 'next/server'
export default function Home() {
  const history = useHistory
  const [hospitalId , setEmail] = useState()
  const [password , setPassword] = useState()
  const changeEmail = (e)=>{ 
    setEmail(e.target.value)
  }
  const changePassword = (e)=>{
    
    setPassword(e.target.value)
  }

  const loginUser = async(e)=>{
     e.preventDefault()
    const res = await fetch("/login" ,{
      method : "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        hospitalId,
        password
      })
      
    })

    const data = res.json()
    if(res.status== 400 || !data){
      window.alert("Invalid Credentials")
    }
    else{
      window.alert("Login Succesful")
      return NextResponse.redirect('http://localhost/home')
    }
     
  }
  
  return (
    <>
    <div className='main_page'>
      <img src='/bgImg.jpg' className='bgImg'/>

        <div className='main_box'>

          
          <div className='primary_text'>Hospital Admin Console</div>
          <div className='secondary_text'>Login to update the details</div>

          <form className='form' method='POSt' >
            <input placeholder='Hospital Id' className='id' name = "hospitalid" value={hospitalId} onChange={changeEmail} />
            <input placeholder='Password' className='password' name="password" value={password} onChange={changePassword} />
            <button type="button" className="btn btn-primary register" onClick={loginUser} >Register Account</button>
            <div className='agreement'>By sign up you're agreeing to our <span className='terms'>Terms and Conditions</span></div>
          </form>

        </div>

      </div>
    </>
  )
}
