import React from 'react';
import "./Home.css";
import Card from './../../component/card/card'
import Header from './../../component/header/header'
import Button from './../../component/button/button'
import About from './../../component/about/about'
import Services from './../../component/services/services'
import Faqs from './../../component/faqs/faqs'
import Satisfaction from './../../component/satisfaction/satisfaction'
import Footer from './../../component/footer/footer'
export default function Home() {
  return (
    <div className="_main_div">
      {/* header */}
      <Header />
      {/* get start btn */}
      <div className="_header_get_start_btn">

        <Button />
      </div>
      <br />
      <br />
      {/* DID YOU KNOW */}
      <div className="_about">

        <About />
      </div>
      <br />
      <br />
      {/* get start btn */}
      <div className="_get_start_btn">
        <Button />
      </div>

      {/* pricing  card*/}
      <br />
      <br />
      <br />
      <div className="_card">

        <Card />
      </div>
      <br />
      <br />
      <br />
      {/* get start btn */}
      <div className="_get_start_btn">
        <Button />
      </div>
      {/* services */}
      <br />
      <br />
      <br />
      <div className="_services">

        <Services />
      </div>
      {/* FAQs */}
      <Faqs />
      <div className="_faqs_get_Start_btn">

        <Button />
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* 100% Satisfaction Guarantee */}
      <div className="_satisfaction">

        < Satisfaction />
      </div>
      {/* footer */}
      <div className="_footer">

        <Footer />
      </div>
    </div>
  );
}
