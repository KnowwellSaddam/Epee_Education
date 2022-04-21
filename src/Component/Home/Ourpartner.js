import React from 'react';


const Ourpartner = () => {
  return (
    <section className='mx-20 flex mb-20'>
        <div className='w-1/2 pr-10'>
            <figure className='relative'>
                <img src="images/meeting01.png" alt="meeting01" />
                <img className='small-img' src="images/meeting02.png" alt="meeting02" />
            </figure>
        </div>
        <div className='w-1/2 pl-10 mt-5'>
         <h1 className='text-3xl mb-3 font-semibold'>Want To Partner With Epee?</h1>
         <p className='text-lg pr-20'>Dapibus sollicitudin id cras quis gravida. Tortor sagittis tortor ut feugiat vulputate tur pis malesuada varius. Adipiscing interdum convallis blandit eget aenean enim acnor. Amet, vitae interdum faucibus egestas donec tincidunt non.
             Risus sagittis ridiculus id libero. Sit quis vitae, fusce lacus, phasellus.</p>

          <div className='flex'>
            <div className='mt-10 w-1/2'>
                <img src="images/presentation.png" alt="presentation" />
                <h3 className='font-semibold text-green-500 text-xl'>Lorem Ipsum Sit</h3>
                <p className='text-lg '>Aliquet vitae orci ut leo egestas interdum id convallis fringilla.</p>
            </div>
            <div className='mt-10 w-1/2'>
                <img src="images/presentation.png" alt="presentation" />
                <h3 className='font-semibold text-green-500 text-xl'>Consequet Dolor Elit</h3>
                <p className='text-lg'>Aliquet vitae orci ut leo egestas interdum id convallis fringilla.</p>
            </div>
          </div>
          <div className='mt-10 '>
                <h3 className='font-bold text-black text-xl'>Offer our professional training at your institute or organization.</h3>
                <p className='text-lg font-semibold text-green-500'><a href="mailto:admin@epee-education.com">admin@epee-education.com</a></p>
            </div>
        </div>
    </section>
  )
}

export default Ourpartner;