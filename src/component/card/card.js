import React from 'react';
import "./card.css";
import CardImg1 from './../../img/card1_image.png'
import CardImg2 from './../../img/card2_image.png'
import CardImg3 from './../../img/card3_image.png'
import CardImg4 from './../../img/card4_image.png'
import Card1Icon from './../../img/icon-Free.png'
import Card2con from './../../img/icon-basic.png'
import Card3con from './../../img/icon-premium.png'
import Card4con from './../../img/icon-ultimate.png'
import TickMarkIcon from './../../img/tick-mark-icon-png-7.png'
import { MDBCard, MDBCol, MDBRow} from "mdbreact";
export default function Card() {
    return (
        <MDBRow className="mb-0 _card_2" >
            <MDBCol sm="1">
            </MDBCol>
            <MDBCol sm="10">
                <p className="_pricing">PRICING</p>
                <br />
                <MDBRow className="mb-0">
                    <MDBCol sm="3">
                        <MDBCard className="_mdbcard">
                            <img src={CardImg1} className="CardImg1" />
                            <div className="_icon_div">
                                <p className="_card_heading">FREE</p>
                                <img src={Card1Icon} className="_card1_icon" />
                            </div>
                            <p className="_card_value">
                                <span>$</span>
                                <span className="_card_free_price">0</span>
                                <span>/MO</span>
                                <br />
                                <span style={{ color: "white" }}>.</span>
                            </p>
                            <hr />
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>
                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">1 Active Audiobook</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Unlimited Reviews</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>
                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Public Listing</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Unlimited Promo Codes</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm="3">
                        <MDBCard className="_mdbcard">
                            <img src={CardImg2} className="CardImg1" />
                            <div className="_icon_div">
                                <p className="_card_heading">BASIC</p>
                                <img src={Card2con} className="_card2_icon" />
                            </div>
                            <p className="_card_value">
                                <span>$</span>
                                <span className="_card_free_price">15</span>
                                <span>/MO</span><br />
                                <span className="_card_sub_heading">INDIVIDUAL</span>
                            </p>
                            <hr />
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">5 Active Audiobooks</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Unlimited Reviews</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Public Listing</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Unlimited Promo Codes</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm="3">
                        <MDBCard className="_mdbcard">
                            <img src={CardImg3} className="CardImg1" />
                            <div className="_icon_div">
                                <p className="_card_heading">PREMIUM</p>
                                <img src={Card3con} className="_card3_icon" />
                            </div>
                            <p className="_card_value">
                                <span>$</span>
                                <span className="_card_free_price">29</span>
                                <span>/MO</span>
                                <br />
                                <span className="_card_sub_heading">BUSINESS</span>
                            </p>
                            <hr />
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">15 Active Audiobooks</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Unlimited Reviews</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Public Listing</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Unlimited Promo Codes</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm="3">
                        <MDBCard className="_mdbcard">
                            <img src={CardImg4} className="CardImg1" />
                            <div className="_icon_div">
                                <p className="_card_heading">ULTIMATE</p>
                                <img src={Card4con} className="_card4_icon" />
                            </div>
                            <p className="_card_value">
                                <span>$</span>
                                <span className="_card_free_price">49</span>
                                <span>/MO</span>
                                <br />
                                <span className="_card_sub_heading">ENTERPRISE</span>
                            </p>
                            <hr />
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">30 Active Audiobooks</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Unlimited Reviews</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Public Listing</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol sm="2">
                                </MDBCol>

                                <MDBCol sm="9">
                                    <img src={TickMarkIcon} className="_tick_mark_iocn" />
                                    <span className="_Card_txt">Unlimited Promo Codes</span>
                                </MDBCol>
                                <MDBCol sm="1">
                                </MDBCol>
                            </MDBRow>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
            <MDBCol sm="1">
            </MDBCol>
        </MDBRow>

    );
}
