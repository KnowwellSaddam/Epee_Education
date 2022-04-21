import React from 'react';
import Button from '../../content/atom/button';


const Month_Sub = (props) => {
  return (
    <section className='flex items-center mb-20 mx-4 px-20'>
        <div className='w-1/2'>
            <div className='p-20 bg-green-500  rounded-r-sm rounded-lg text-white'>
              <h3 className='font-semibold text-lg mb-2'>{props.title}</h3>
               <div className='mb-5'> <small className='text-2xl align-top'>$</small><b className='text-5xl font-semibold'>{props.price} </b></div>
                <h4 className='text-xl font-semibold mb-5'>{props.heading}</h4>
                <p className='pr-40 text-lg mb-7'>{props.para}</p>
                <Button variant='primary'>{props.btntxt}</Button>
            </div>
        </div>
        <div className='w-1/2'>
            <div className='p-20 shadow-xl rounded-lg rounded-l-sm border'>
              <h3 className='font-semibold text-lg mb-2'>{props.sec_title}</h3>
               <div className='mb-5'> <small className='text-2xl align-top'>$</small><b className='text-5xl font-semibold'>{props.SecPrice} </b></div>
                <h4 className='text-xl font-semibold mb-5'>{props.heading_3}</h4>
                <h4 className='text-2xl font-semibold mb-5'>{props.heading_4}</h4>
                <p className='pr-40 text-lg mb-7'>{props.para_2}</p>
                <p className='pr-40 text-lg mb-7'>{props.para_3}</p>
                <Button variant='secondary'>Get Monthly Subscription</Button>
            </div>
        </div>
    </section>
  )
}

export default Month_Sub;
