import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className='main_page'>
      <img src='/bgImg.jpg' className='bgImg'/>

        <div className='main_box'>

          
          <div className='primary_text'>Hospital Admin Console</div>
          <div className='secondary_text'>Login to update the details</div>

          <form className='form'>
            <input placeholder='Hospital Id' className='id'/>
            <input placeholder='Password' className='password'/>
            <button type="button" className="btn btn-primary loginButton" >Login</button>
            <div className='agreement'>By sign up you're agreeing to our <span className='terms'>Terms and Conditions</span></div>
          </form>

        </div>

      </div>
    </>
  )
}
