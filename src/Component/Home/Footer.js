import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='my-20 px-20 flex'>
        <div className='w-1/3'>
            <a to="/"><img src="images/footer-logo.png" alt="footer-logo" /></a>
            <p className='mt-5 text-lg pr-20'>Epee Education is an e-learning platform for students and young professionals to fill the gap between academics and the real world</p>
        </div>

        <div className='w-1/3'>
            <h3 className='text-2xl mb-7 pb-3 relative'>Link <span className='inline-block w-12 h-1 bg-green-400 absolute bottom-0 left-0'></span></h3>
            <ul className='flex flex-wrap text-lg'>
                <li className='w-1/2 mb-3 hover:text-green-400'><a href="#">Become A Member</a></li>
                <li className='w-1/2 mb-3 hover:text-green-400'><a href="#">Presenters</a></li>
                <li className='w-1/2 mb-3 hover:text-green-400'><a href="#">Privacy Policy</a></li>
                <li className='w-1/2 mb-3 hover:text-green-400'><a href="#"> Contact Us</a></li>
                <li className='w-1/2 mb-3 hover:text-green-400'><a href="#"> Pricing</a></li>
                <li className='w-1/2 mb-3 hover:text-green-400'><a href="#">Terms & Conditions</a></li>
            </ul>
        </div>

        <div className='w-1/3 text-lg'>
          <h3 className='text-2xl mb-7 relative pb-3'>Contact Us <span className='inline-block w-12 h-1 bg-green-400 absolute bottom-0 left-0'></span></h3>
          <p className='mb-3 hover:text-green-400'><Link to="mailto:admin@epee-education.com">admin@epee-education.com</Link></p>
          <p className='mb-3 hover:text-green-400'><Link to="mailto:hello@epee-education.com">hello@epee-education.com</Link></p>
          <p className='mb-3 hover:text-green-400'><Link to="tel:01234567889">01234567889</Link></p>
        </div>

    </section>
  )
}

export default Footer;