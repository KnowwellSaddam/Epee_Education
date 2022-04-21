import React from 'react';
import Banner from './Home/Banner';
import Course_title from './Home/Course_title';
import Popular_Classes from './Home/Popular_Classes';
import Presenter from './Home/Presenter';
import Industries from './Home/Industries';
import Month_Sub from './Home/Subscription';
import Tesimonials from './Home/Tesimonials';
import Ourpartner from './Home/Ourpartner';
import NewLetter from './Home/NewLetter';
import Footer from './Home/Footer';


const Home = () => {
  return (
   <>
      <Banner cover_text="Learn what school Never Teach!!"
      banner_para="We close the gap between academics and the real world by enabling professionals to share their ACTUAL experience. Learn anytime and anywhere from the people who have already lived it!"
      btn_text="Our Courses" btn_text1="Join For Free" />

      <Course_title />
      <Popular_Classes />
      <Presenter />
      <Industries />

      <Month_Sub title="Individual Courses" sec_title="Monthly Subscription" SecPrice="25"
      price="0-20" heading="Epee Education Will Never Be Wealth Dependent!!"
      heading_3="Less Than $1 Per Day!!" heading_4="New: 1 Month Free Trial"
      para="Select topics of greatest interest
      Most classes are 30-60 minutes $10 per hour of content
      Watch on-demand from our ever-growing library"
      para_2="Epee Membership provides open-access to the library
      Click to View - No Delays, No Expiration
      After trial, still less than $1 per day
      Most cost effective solution"
      para_3="Excludes content only for experienced professionals"
      btntxt="Go To Class List" />

      <Tesimonials />
      <Ourpartner />
      <NewLetter />
      <Footer />


   </>
  )
}

export default Home;