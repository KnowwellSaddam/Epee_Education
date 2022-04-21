import React from 'react';

import Slider_Testimonial from "react-slick";

const TestiCard =(props)=>{

    const {clientText , clientName ,clientDesi ,clientImg} = props;

    return(
        <div className='mx-3'>
            <div className='rounded-lg p-10 bg-white text-black'>
                <p className='text-lg'>{clientText}</p>
                <div className='flex mt-10'>
                    <div className='mr-4'>
                        <img src={clientImg} className='w-16' alt="img" />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>{clientName}</h3>
                        <p className='text-lg'>{clientDesi}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Client_Testi =({children})=>{
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider_Testimonial {...settings}>
          {children}
        </Slider_Testimonial>
      </div>
    );
  }

function Tesimonials() {
    return (
        <section className='testimonials mx-20 p-20 mb-20 rounded-lg text-white' style={{ backgroundImage: `url("images/bg-testi01.png")` }}>
            <div className="font-bold text-4xl w-full mb-6 px-4">People Love Us <br></br>and Our Strategies</div>
            <Client_Testi>
              <TestiCard clientText="“I believe when I showed up on my first day of employment, I basically knew nothing. College teaches you the theory and some of the application of how items operate in the power industry,
                    but many of the calculated methods at University relied on antiquated equipment and analysis.”" clientName="Philip Gonski" clientDesi="Sr. Project Manager - Burns Engineering"
                     clientImg="images/jothan.png"  />

                    <TestiCard clientText="Our academic classes help us learn the fundamentals of engineering, and supposedly group projects teach us to “work with others.”
                     What school did not teach me was how to lead by influence, especially when some of my colleagues are peers or out rank me. education is the most.." clientName="Dr. Eleanor Small" clientDesi="Principal Scientist"
                     clientImg="images/Eleanor01.png"  />

                      <TestiCard clientText="Dapibus sollicitudin id cras quis gravida. Tortor sagittis tortor ut feugiat vulputate tur pis malesuada varius. Adipiscing interdum convallis blandit eget aenean enim acnor. Amet, vitae interdum faucibus
                       egestas donec tincidunt non. Risus sagittis ridiculus id libero. Sit quis vitae, fusce lacus, phasellus." clientName="Dr. Megan Kelly" clientDesi="Sr. Manager Assis "
                     clientImg="images/circle-img01.png"  />
            </Client_Testi>
        </section>
    );
}

export default Tesimonials;