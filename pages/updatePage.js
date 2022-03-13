import React from 'react'

const updatePage = () => {
  return (
    <div>
      <nav class="navbar navbar-light navbar-expand-sm fixed-top ">
        <div class="container">
        <a href="/" class="navbar-brand">
          <div class ="span">Update Info </div>
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
             <li class="nav-item">
                <a href="" class="nav-link active ">
                    logout
                </a>
            </li>
        </ul>
        </div>
</div>
</nav>
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