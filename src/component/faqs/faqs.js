import React from 'react';
import "./faqs.css";
import Accordion from './../accordion/accordion'

import { MDBCol, MDBRow } from "mdbreact";
export default function CenteredGrid() {
  return (
    <div className="_faqs_background_img">
      <MDBRow className="mb-0">
        <MDBCol sm="2">
        </MDBCol>
        <MDBCol sm="8">
          <p className="_heading">FAQs</p>
          <Accordion />
        </MDBCol>
        <MDBCol sm="2">
        </MDBCol>
      </MDBRow>
    </div>
  );
}
