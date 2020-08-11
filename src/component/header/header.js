import React from 'react';
import "./header.css";
import { MDBCol, MDBRow } from "mdbreact";
export default function Header() {
  return (
    <div className="_header_background">
      <MDBRow className="mb-0">
        <MDBCol sm="2">
        </MDBCol>
        <MDBCol sm="8">
          <p className="_header_heading_txt">Struggling to get reviews?</p>
        </MDBCol>
        <MDBCol sm="2">
        </MDBCol>
      </MDBRow>
      {/* youtube video */}
      <MDBRow className="mb-0">
        <MDBCol sm="2">
        </MDBCol>
        <MDBCol sm="8">
          <iframe className="_header_youtube_video" src="https://www.youtube.com/embed/8P20vbaI2kY">
          </iframe>
        </MDBCol>
        <MDBCol sm="2">
        </MDBCol>
      </MDBRow>
    </div>
  );
}
