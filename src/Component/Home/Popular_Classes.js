import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const CardSlider =({children})=> {
    const settings = {
      dots: true,
      arrows:false,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
        {children}
        </Slider>
      </div>
    );
  }

const Popular_Classes = () => {

    const Card = [
        {
        id:0,
         card_img:'images/classes01.png',
         course_title:'Business , Introduction , Personal Development...',
         course_heading:'Landing your First Job. Professional Tools, Recruiting, Getting it Right',
         circle_img:'images/circle-img01.png',
         client_name:'Megan Kelly',
         minuts:'90 min'
        },
        {
        id:1,
        card_img:'images/classes02.png',
        course_title:'Business , Entrepreneurship , Popular , Project...',
        course_heading:'Pursuing Success in Life and Your Career',
        circle_img:'images/kevin.png',
        client_name:'Megan Kelly',
        minuts:'45 min'
        },
        {
        id:2,
        card_img:'images/classes03.png',
        course_title:'Business , Personal Development , Designer Popular ...',
        course_heading:'Professionalism: Dress the Part, Recruiting, Getting it Right',
        circle_img:'images/jothan.png',
        client_name:'Megan Kelly',
        minuts:'43 min'
        },
        {
        id:3,
        card_img:'images/classes04.png',
        course_title:'Business , Personal Development , Designer Popular ...',
        course_heading:'Professionalism: Dress the Part, Recruiting, Getting it Right',
        circle_img:'images/Fern01.png',
        client_name:'Megan Kelly',
        minuts:'35 min'
        },
        {
          id:4,
          card_img:'images/courses01.png',
          course_title:'Business , Personal Development , Designer Popular ...',
          course_heading:'Professionalism: Dress the Part, Recruiting, Getting it Right',
          circle_img:'images/Headshot01.png',
          client_name:'Megan Kelly',
          minuts:'60 min'
          }
    ];

  return (
    <section className='mb-20 px-20 py-5'>

       <div className='flex'>
       <div className='w-1/2'>
            <div className='font-bold text-4xl w-full'>Popular Classes</div>
            <p className='mb-10'>Faucibus at egestas placerat donec leo, posuere at eget pretium proin.</p>
        </div>
        <div className='w-1/2 text-right'>
            <a href="#" className='font-semibold text-green-700'>
                <img src="images/download-arrow.png" className='inline-block mr-3' alt="download-arrow" />
                 Browse All Classes
            </a>
        </div>
       </div>

        <div className='w-full'>
          <CardSlider>
          {Card.map((card_sec)=>{
           // console.log(card_sec.id)
          return<div key={card_sec.id}>
              <div className='col-span-3 mx-2' >
                  <div className='rounded border relative' >
                    <div className="bg-blue-700 absolute p-2 px-6 text-white font-semibold rounded-t-md ">SH</div>
                    <span className="flex bg-white text-green-600 absolute w-14 rounded-full h-14 text-center items-center justify-center text-bold text-lg top-52 right-8">$5</span>
                      <a href="#"><img className='inline-block w-full' src={card_sec.card_img} alt="classes01" /></a>
                      <div className='p-5'>
                          <p className='text-lg my-4'> {card_sec.course_title}</p>
                          <a href="#" className="mb-1 text-xl hover:text-green-400 font-semibold">{card_sec.course_heading}</a>
                          <div className='flex items-center mt-4'>
                          <img src={card_sec.circle_img} alt="circle-img01" />
                          <span className='inline-block ml-2'>{card_sec.client_name}</span>
                          <span className='inline-block w-1 h-5 mx-3 bg-black'></span>
                          <img src="images/timer.png" alt="timer01" />
                          <span className='inline-block ml-2'>{card_sec.minuts}</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          })}
          </CardSlider>
        </div>
  </section>
  )
}

export default Popular_Classes;