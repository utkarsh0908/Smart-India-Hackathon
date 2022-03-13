import React from 'react'

const updatePage = () => {
  return (
    <div>
      <div className='main_pageUpdate'>
      <img src='/bgImg.jpg' className='bgImg'/>

        <div className='main_boxUpdate'>

          
          <div className='primary_text'>Update</div>
          <div className='secondary_text'>Update the information.</div>

          <form className='form'>
            <input placeholder='Bed Availability' className='id'/>
            <input placeholder='Critical/ICU Beds Available' className='field'/>

            <div className='formRow'>
            <input placeholder='Oxygen Cylinder Available' className='field'/>
            <input placeholder='Blood Group Availability' className='field'/>
            </div>

          
            <button type="button" className="btn btn-primary updateButton" >Update</button>
            <div className='agreement'>By sign up you're agreeing to our <span className='terms'>Terms and Conditions</span></div>
          </form>

        </div>

      </div>
    </div>
  )
}

export default updatePage