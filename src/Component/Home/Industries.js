import React from 'react';

const Industries = () => {

const Industries_card =[
    {
        id:0,
        image: 'images/010-car.svg',
        heading:'Automotive',
        para: '35 Classes',
        bg:'bg-green-50'
    },
    {
        id:1,
        image: 'images/011-building.svg',
        heading:'Buildings and Infrastructure',
        para: '44 Classes',
        bg:'bg-amber-50'
    },
    {
        id:2,
        image: 'images/012-antenna.svg',
        heading:'Communications',
        para: '33 Classes',
        bg:'bg-violet-50'
    },
    {
        id:3,
        image: 'images/014-cms.svg',
        heading:'Computers and  Automation',
        para: '42 Classes',
        bg:'bg-rose-100'
    },
    {
        id:4,
        image: 'images/015-safety.svg',
        heading:'Construction',
        para: '55 Classes',
        bg:'bg-purple-100'
    },
    {
        id:5,
        image: 'images/016-brain.svg',
        heading:'Data and Artificial Intelligence',
        para: '68 Classes',
        bg:'bg-emerald-100'
    },
    {
        id:6,
        image: 'images/soldier.svg',
        heading:'Defense/Military',
        para: '28 Classes',
        bg:'bg-amber-50'
    },
    {
        id:7,
        image: 'images/creativity 1.svg',
        heading:'Education',
        para: '31 Classes',
        bg:'bg-violet-200'
    }

];

  return (
    <section>
        <div className='mb-10 px-20'>
          <div className='flex px-5'>
          <div className='font-bold text-4xl w-1/2 mb-6'>
              <div className='text-xl'>Browse By</div>
              Industries
          </div>
             <div className='w-1/2 text-right'>
             <a href="#" className='font-semibold text-green-500'>
                <img src="images/download-arrow02.png" className='inline-block mr-3' alt="download-arrow" />
                View All
            </a>
            </div>
          </div>

          <div className='flex flex-wrap'>
              {Industries_card.map((card , ind)=>{
                return(
                    <div className='w-1/4 mb-7 px-4 text-center' key={card.id}>
                        <div className={` ${card.bg} bg-green-50 rounded-lg p-20 h-full`}>
                        <img src={card.image} className='rounded w-16 inline-block' alt={card.image} />
                            <h3 className='font-semibold text-xl py-2 mt-2'>{card.heading}</h3>
                            <p className='text-lg'>{card.para}</p>
                        </div>
                    </div>
                )
              })}

          </div>
          <div className='flex p-20 mx-20'>
              <div className='text-4xl font-semibold w-1/2'>
                NEW:  1 Month Free Trial!
              </div>
              <div className='w-1/2 border-l-4 pl-3 border-green-400'>

                <div className='text-lg font-semibold'>With unlimited access to our library, you can FINALLY learn the real-world topics that schools never teach!</div>
                <div className='text-lg mt-2'>Fill in your free profile and Epee will suggest the best courseses for you!</div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Industries