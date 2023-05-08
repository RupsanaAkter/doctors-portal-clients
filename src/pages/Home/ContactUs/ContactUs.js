import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const ContactUs = () => {
    return (
        <section
        style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover'
        }}
        >
           <div className='text-center pt-20'>
                <h1 className='text-secondary font-bold'>Contact Us </h1>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>
            </div>
            

            <div className="hero min-h-screen ">

            

  <div className="hero-content text-center ">
  
    <div className="card flex-col lg:flex-row  ">
      <div className="card-body">
        <div className="">
         
          <input type="text" placeholder="Email" className="input input-bordered" />
        </div>
        <div className="">
         
          <input type="text" placeholder="password" className="input input-bordered" />
        
        </div>
        <div className="">
         
          <input type="text" placeholder="Your message" className="input input-bordered" />
        
        </div>
        <div className=" mt-6">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</div>


            
        </section>
    );
};

export default ContactUs;