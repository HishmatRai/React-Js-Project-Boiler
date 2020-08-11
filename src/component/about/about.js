import React from 'react';
import Separator from './../../img/separator.png'
import Microphone from './../../img/microphone.png'
import './about.css'
import { MDBCol, MDBRow } from "mdbreact";
export default function about() {
    return (
        <MDBRow className="mb-0">
            <MDBCol sm="1">
            </MDBCol>
            <MDBCol sm="10">
                <p className="_did_you_know">DID YOU KNOW?</p>
                <p className="_reviews_percentage">Displaying reviews on a product or service has shown <br />to increase conversions by a whopping 270%!</p>
                <img src={Separator} className="_Separator_img" />
                {/* microphone */}
                <MDBRow className="mb-0">
                    <MDBCol sm="3">
                        <img src={Microphone} className="_microphone_img" />
                    </MDBCol>
                    <MDBCol sm="9">

                        <br />
                        <br />
                        <p className="_microphone_1_txt">We know producing an audiobook is more than just speaking into a
                        microphone. Audiobook creators are plagued with plenty of challenges, but
                        getting honest reviews on your beautiful creations should never be obstacle
                    on your way to success.</p>

                        <br />
                        <br />
                        <p className="_microphone_1_txt">At Audiobook Rocket, we help audiobook publishers and narrators find their
                        dream target audience who are hungry for soundwaves and eager to leave
                        honest reviews. ACX.com gives audiobook publishers, narrators and authors
                        up to 200 promo codes to download a free copy of their audiobook. This gift is
                  to help you market your audiobook and brand.</p>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
            <MDBCol sm="1">
            </MDBCol>
        </MDBRow>

    );
}
