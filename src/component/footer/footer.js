import React from 'react';
import "./footer.css";
import { MDBCol, MDBRow } from "mdbreact";
export default function CenteredGrid() {
  return (
    <div className="_footer">
      <MDBRow className="mb-0">
        <MDBCol sm="1">
        </MDBCol>
        <MDBCol sm="9">
          <p>Copyright 2020 - AudiobookRocket.com</p>
        </MDBCol>
        <MDBCol sm="2">
          <p>
            <a href="" className="_link">Disclaimer</a>
          </p>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
