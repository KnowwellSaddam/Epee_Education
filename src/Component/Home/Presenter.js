import React from 'react';

const Presenter = () => {

  const Grid_Items = [
    {
      id:0,
      image: 'images/Jonathan-2015Headshot.jpg',
      heading:'Jonathan Cameron CFP®',
      para: 'Founder & Principal, CameronDowning, Inc.'
    },
    {
      id:1,
      image: 'images/Eleanor-Small.jpg',
      heading:'Dr. Eleanor Small',
      para: 'PhD, Johnson & Johnson, Principal Scientist'
    },
    {
      id:2,
      image: 'images/Teresa-Whitney.jpg',
      heading:'Teresa Whitney, Ph.D.',
      para: 'GlaxoSmithKline (GSK), Workplace Design & Change Manager'
    },
    {
      id:3,
      image: 'images/Steven-Jacobs.jpg',
      heading:'Steven Jacobs',
      para: 'Global BioPharm Solutions, President'
    },
    {
      id:4,
      image: 'images/Tom-Bell.jpg',
      heading:'Tom Bell',
      para: 'Vertex Labs, CEO / Co-Founder'
    }

  ];

  return (
    <section>
        <div className='mb-20 px-20 py-5'>
          <div className='flex px-5'>
          <div className='font-bold text-4xl w-1/2 mb-6'>Presenters</div>
             <div className='w-1/2 text-right'>
             <a href="#" className='font-semibold text-green-500'>
                <img src="images/download-arrow02.png" className='inline-block mr-3' alt="download-arrow" />
                View All
            </a>
            </div>
          </div>

          <div className='flex justify-items-center'>

            {Grid_Items.map((current , index)=>{
            return(
              <div className='w-1/5 px-4' key={current.id}>
                <figure><img src={current.image} className='rounded w-full' alt="" /></figure>
                <h3 className='font-semibold text-xl py-2 pr-5 mt-2'>{current.heading}</h3>
                <p className='text-lg'>{current.para}</p>
            </div>
            )
            })}

          </div>
        </div>
    </section>
  )
}

export default Presenter;