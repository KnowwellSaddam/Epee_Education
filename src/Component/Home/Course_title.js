import React from 'react'

const Course_title = () => {

    const Personal_Course = [
        {
        id:0,
        icon:'images/img01.png',
        txt_clr:'text-fuchsia-600',
        bg_color:'bg-fuchsia-100',
        title:'Personalized Courses',
        para:'Build YOUR curriculum around YOUR needs.'
    },
    {
       id:1,
        icon:'images/full-access.png',
        title:'Full Access Membership',
        txt_clr:'text-cyan-500',
        bg_color:'bg-cyan-100',
        para:'First Month Free Trial, then continue for less than $1 per day!.'
    },
    {
      id:2,
        icon:'images/personal-img.png',
        title:'Personal Development Courses',
        txt_clr:'text-pink-500',
        bg_color:'bg-pink-100',
        para:'Personal finances, running effective meetings, insurance, leadership and team building skills.'
    }
];



  return (
    <section className='mt-10 mb-10 px-20 py-5'>
        <div className='grid grid-cols-12 gap-4'>

            {Personal_Course.map((currItem ,i)=>{
              // console.log(i);
               return(
                  <div className='col-span-4 flex' key={i}>
                  <div className='w-1/5 mr-5' >
                    <div className={`${currItem.bg_color} p-6 rounded text-center`}>
                      <img className='inline-block ' src={currItem.icon} alt="" />
                    </div>
                  </div>
                  <div className='w-3/4'>
                      <h3 className={`${currItem.txt_clr} font-semibold mb-1 text-2xl`}>{currItem.title}</h3>
                      <p className='text-lg'>{currItem.para}</p>
                  </div>
                  </div>
              )
            })}


        </div>
    </section>
  )
}

export default Course_title;