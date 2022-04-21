import React from 'react';
import Button from '../../content/atom/button';

const Banner = (props) => {

  return (
    <section className='bg-emerald-900 pb-20 pt-20 bg-right-top bg-no-repeat' style={{backgroundImage: `url("images/shape-green.png")`}}>
        <div className='container mx-auto'>
          <div className='pt-20'>
            <div className='flex items-center'>
               <div className='w-1/2'>
                    <h3 className='text-white text-2xl font-semibold mb-4'><span className='inline-block w-1 h-5 bg-green-600'></span> Keep Learning</h3>
                    <h1 className='text-white text-6xl font-bold mb-7'>{props.cover_text}</h1>
                    <p className='text-white text-xl pr-6 my-8'>{props.banner_para}</p>
                <div className='flex'>
                  <Button>{props.btn_text}</Button>
                  <Button>{props.btn_text1}</Button>
                </div>

               </div>
               <div className='w-1/2'>
                <figure className='relative z-10'><img src="images/mock.png" alt="mock" /></figure>
               </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Banner;