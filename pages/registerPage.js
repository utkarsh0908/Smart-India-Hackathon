import React from 'react'

const registerPage = () => {
  return (
    <div>
      <div className='main_pageRegister'>
      <img src='/bgImg.jpg' className='bgImg'/>

        <div className='main_boxRegister'>

          
          <div className='primary_text'>Register</div>
          <div className='secondary_text'>Register your Hospital to our portal.</div>

          <form className='form'>
            <input placeholder='Hospital Name' className='id'/>

            <input placeholder='Email Id' className='email'/>

            <div className='formRow'>
            <input placeholder='Total Beds Available' className='field'/>
            <input placeholder='Total Critical/ICU Beds Available' className='field'/>
            </div>

            <div className='formRow'>
            <input placeholder='Total Oxygen Cylinder Counts' className='field'/>
            <input placeholder='Blood Groups Available' className='field'/>
            </div>

            <div className='formRow'>
            <input placeholder='Latitude' className='field'/>
            <input placeholder='Longitude' className='field'/>
            </div>

            <div className='formRow'>
            <input placeholder='Opening Time' className='field'/>
            <input placeholder='Closing Time' className='field'/>
            </div>
            <button type="button" className="btn btn-primary register" >Register Account</button>
            <div className='agreement'>By sign up you're agreeing to our <span className='terms'>Terms and Conditions</span></div>
          </form>

        </div>

      </div>
    </div>
  )
}

export default registerPage