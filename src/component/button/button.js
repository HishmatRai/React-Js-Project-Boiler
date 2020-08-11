import React from 'react';
import Button from '@material-ui/core/Button';
import './button.css'
import { MDBCol, MDBRow } from "mdbreact";
export default function button() {
    return (
        <div className="_get_Start">
            <MDBRow className="mb-0">
                <MDBCol sm="4">
                </MDBCol>
                <MDBCol sm="4">
                    <Button
                        className="_btn">

                        GET STARTED FOR FREE
               </Button>
                </MDBCol>
                <MDBCol sm="4">
                </MDBCol>
            </MDBRow>
        </div>
    );
}
