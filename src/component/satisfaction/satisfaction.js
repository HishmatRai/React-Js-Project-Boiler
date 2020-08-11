import React from 'react';
import "./satisfaction.css";
import Badge from './../../img/copy-2-badge.png'
import { MDBCol, MDBRow } from "mdbreact";
export default function setisfaction() {
    return (
        <MDBRow className="mb-0">
            <MDBCol sm="2">
            </MDBCol>
            <MDBCol sm="8">
                {/* ====== */}
                <MDBRow className="mb-0">
                    <MDBCol sm="3">
                        <img src={Badge} className="_Satisfaction_img" />
                    </MDBCol>
                    <MDBCol sm="9">
                        <p className="_Satisfaction_heading1">100% Satisfaction Guarantee</p>
                        <p className="_Satisfaction_desc">You are fully protected by our 100% Satisfaction-Guarantee. Our free plan will remain free forever. On our paid plans, we don't charge until you get at least two (2) verified reviews on your first audiobook listing. It's a win-win.</p>
                        <br />
                        <p className="_footer_link">
                            <a href="" className="__footer_link_color">
                                Yes, I want to start getting reviews now! </a></p>
                        <br /><br />
                    </MDBCol>
                </MDBRow>
            </MDBCol>
            <MDBCol sm="2">
            </MDBCol>
        </MDBRow>
    );
}
