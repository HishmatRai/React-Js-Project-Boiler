import React from 'react';
import "./accordion.css";
export default function Accordion() {
  return (

    <div className="row">


      <div className="col">

        <div className="tabs">
          <div className="tab">
            <input type="radio" id="rd1" name="rd" />
            <label className="tab-label" for="rd1">DO YOU SUPPORT FINDAWAY OR OTHER NON-ACX CODES?</label>
            <div className="tab-content">
              Currently, no. However, we are in the process of implementing that feature in the near future. For the time being, we only support ACX codes.
              </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd2" name="rd" />
            <label className="tab-label" for="rd2">IF I GIVE AWAY MY PROMO CODES, WILL I FINALLY GET REVIEWS?</label>
            <div className="tab-content">
              <p>
                We can’t guarantee that any of the codes you give out will get your audiobook a review. However, our system only allows listeners to be given additional promo codes from authors if they leave a review.</p>

              <h3>It works like this:</h3>
              <ol>
                <li>A listener requests a promo code from an author.</li>
                <li>Author is notified of a request via email and either approves or disapproves giving out a promo code.</li>
                <li>The listener has 30 days to leave an unbiased, honest review.</li>
                <li>Upon the publisher confirming that the listener did leave a review, the listener will be granted the opportunity to receive additional promo codes from other authors on Audiobook Rocket.</li>
                <li>Should they not leave a review in the 30-day time frame, we restrict their account.</li>
              </ol>
            </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd3" name="rd" />
            <label className="tab-label" for="rd3">HOW MANY PROMO CODES CAN I UPLOAD PER AUDIOBOOK?</label>
            <div className="tab-content">
              An unlimited amount.
              </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd4" name="rd" />
            <label className="tab-label" for="rd4">FOR EACH PAID PLAN, THERE’S A FIXED NUMBER OF AUDIOBOOKS. HOW DOES THAT WORK?</label>
            <div className="tab-content">

              Let’s say you subscribe to the Platinum Plan, which allows for 15 active / live audiobooks on Audiobook Rocket. You may have 20 audiobooks in our system, but only 15 total can be active at any given time.
              </div>
          </div>
          <div className="tab">
            <input type="radio" id="rd5" name="rd" />
            <label className="tab-label" for="rd5">SO, I CAN ACTIVATE AND DEACTIVATE MY AUDIOBOOKS?</label>
            <div className="tab-content">

              Yes. However, deactivating an audiobook simply “turns off” the ability for listeners to request a promo code from you. The listing will remain visible on Audiobook Rocket.
              </div>
          </div>

        </div>
      </div>
    </div>

  );
}
