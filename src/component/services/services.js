import React from 'react';
import "./services.css";
import Correctcircle from './../../img/correctcircle.png'
import { MDBCol, MDBRow } from "mdbreact";
export default function services() {
  return (
    <MDBRow className="mb-0">
      <MDBCol sm="2">
      </MDBCol>

      <MDBCol sm="4">
        <MDBRow>

          <MDBCol sm="12">
            <img src={Correctcircle} className="_Correctcircle" />
            <p className="_service_txt">Audiobook listings never expire</p>

          </MDBCol>
        </MDBRow>

        <MDBRow>

          <MDBCol sm="12">
            <img src={Correctcircle} className="_Correctcircle" />
            <p className="_service_txt">Upload an unlimited amount of promo codes</p>

          </MDBCol>
        </MDBRow>
        <MDBRow>

          <MDBCol sm="12">
            <img src={Correctcircle} className="_Correctcircle" />
            <p className="_service_txt">Listeners must provide an honest review (confirmed by the publisher) if they want to be issued additional promo codes</p>

          </MDBCol>
        </MDBRow>
      </MDBCol>

      <MDBCol sm="4">

        <MDBRow>

          <MDBCol sm="12">
            <img src={Correctcircle} className="_Correctcircle" />
            <p className="_service_txt">Don’t have promo codes yet?No problem, listeners can be waitlisted for your audiobook and be notified when you upload additional codes</p>

          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol sm="12">
            <img src={Correctcircle} className="_Correctcircle" />
            <p className="_service_txt">Access to the exclusive Facebook Group</p>

          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="12">
            <img src={Correctcircle} className="_Correctcircle" />
            <p className="_service_txt">All audiobooks under the same author will be displayed</p>

          </MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol sm="2">
      </MDBCol>
    </MDBRow>
  );
}
