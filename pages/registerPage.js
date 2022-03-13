import React from 'react'

const registerPage = () => {
  return (
    <div>
      <nav class="navbar navbar-light navbar-expand-sm fixed-top ">
        <div class="container">
        <a href="/" class="navbar-brand">
          <div class ="span">Register </div>
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