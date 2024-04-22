import React from "react";
import "./addressCard.css";
import uae from "../../assets/uaeFlag.png";
import qatar from "../../assets/qatarFlag.png";

function adressCard() {
  return (
    <>
      <h2 class="h2-head">Admission Offices</h2>
      <div className="location-parent">
        <div className="location-main">
          <div class="location-head">
            <div class="head flex">
              <div class="icon">
                <img class="icon" src={uae} alt="" />
              </div>
              Sharjah – Al Zahiya
            </div>
            <div class="box-contact" id="load">
              <ul>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 512 383.5">
                      <path
                        d="M298.8,249.4c-12.7,8.5-27.5,13-42.8,13c-15.3,0-30.1-4.5-42.8-13L3.4,109.6c-1.2-0.8-2.3-1.6-3.4-2.4v229.2
											c0,26.3,21.3,47.1,47.1,47.1h417.7c26.3,0,47.1-21.3,47.1-47.1V107.1c-1.1,0.8-2.2,1.6-3.4,2.4L298.8,249.4z"
                      ></path>
                      <path
                        d="M20,84.6l209.8,139.9c7.9,5.3,17,7.9,26.1,7.9c9.1,0,18.2-2.6,26.1-7.9L492,84.6c12.6-8.4,20-22.4,20-37.5
											c0-26-21.1-47.1-47.1-47.1H47.1C21.1,0,0,21.1,0,47.1C0,62.2,7.5,76.2,20,84.6z"
                      ></path>
                    </svg>
                  </div>
                  <div class="Txt">
                    <a href="mailto:info@learnersuae.com">
                      info@learnersuae.com
                    </a>
                  </div>
                </li>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 448 448">
                      <path
                        d="M438.3,341.8c-14-11.7-96-63.7-109.6-61.3c-6.4,1.1-11.3,6.6-24.4,22.2c-6.1,7.7-12.7,14.9-19.9,21.6
											c-13.2-3.2-25.9-7.9-38-14.1c-47.3-23-85.5-61.3-108.5-108.6c-6.2-12.1-10.9-24.8-14.1-38c6.7-7.2,13.9-13.8,21.6-19.9
											c15.6-13.1,21.1-18,22.2-24.4c2.4-13.7-49.6-95.6-61.3-109.6c-4.9-5.8-9.3-9.7-15-9.7C74.7,0,0,92.4,0,104.3c0,1,1.6,97.1,123,220.7
											c123.5,121.4,219.7,123,220.7,123c12,0,104.3-74.7,104.3-91.2C448,351.1,444.1,346.7,438.3,341.8L438.3,341.8z"
                      ></path>
                      <path d="M336,208h32c-0.1-70.7-57.3-127.9-128-128v32C293,112.1,335.9,155,336,208z"></path>
                      <path d="M416,208h32C447.9,93.2,354.8,0.1,240,0v32C337.2,32.1,415.9,110.8,416,208z"></path>
                    </svg>
                  </div>
                  <div class="Txt">
                    <p>
                      <a href="tel:+971504181328">+971 50 418 1328</a>
                    </p>
                    <p></p>
                  </div>
                </li>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 384 512">
                      <g id="Pin">
                        <path
                          d="M192,0C86,0.1,0.1,86,0,192c0,137.8,178.9,310.5,186.5,317.8c3.1,3,8,3,11,0C205.1,502.5,384,329.8,384,192
											C383.9,86,298,0.1,192,0z M192,280c-48.6,0-88-39.4-88-88s39.4-88,88-88s88,39.4,88,88C280,240.6,240.6,280,192,280z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div class="Txt">
                    <p>
                      H01, Sharjah Publishing City Free Zone, Sharjah, United
                      Arab Emirates.
                    </p>
                  </div>
                </li>
              </ul>
              {/* <!-- <h4>Sharjah – Al Zahiya</h4>
						<p>B01, Ground Floor, North Entrance – Sharjah Book Authority – Al Zahiya, Sharjah, UAE</p>
						<p>Office: 600 527 221 </br>Mobile: +971 56 403 1122</p>
						<div class="con-loction">
							<p><i class="fa-thin fa-location-dot"></i>Location Map</p>
						</div> --> */}
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="location-main">
          <div class="location-head">
            <div class="head flex">
              <div class="icon">
                <img class="icon" src={uae} alt="" />
              </div>
              DUBAI - OUD METHA (ADMIN OFFICE)
            </div>
            <div class="box-contact" id="load">
              <ul>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 512 383.5">
                      <path
                        d="M298.8,249.4c-12.7,8.5-27.5,13-42.8,13c-15.3,0-30.1-4.5-42.8-13L3.4,109.6c-1.2-0.8-2.3-1.6-3.4-2.4v229.2
											c0,26.3,21.3,47.1,47.1,47.1h417.7c26.3,0,47.1-21.3,47.1-47.1V107.1c-1.1,0.8-2.2,1.6-3.4,2.4L298.8,249.4z"
                      ></path>
                      <path
                        d="M20,84.6l209.8,139.9c7.9,5.3,17,7.9,26.1,7.9c9.1,0,18.2-2.6,26.1-7.9L492,84.6c12.6-8.4,20-22.4,20-37.5
											c0-26-21.1-47.1-47.1-47.1H47.1C21.1,0,0,21.1,0,47.1C0,62.2,7.5,76.2,20,84.6z"
                      ></path>
                    </svg>
                  </div>
                  <div class="Txt">
                    <a href="mailto:info@learnersuae.com">
                      info@learnersuae.com
                    </a>
                  </div>
                </li>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 448 448">
                      <path
                        d="M438.3,341.8c-14-11.7-96-63.7-109.6-61.3c-6.4,1.1-11.3,6.6-24.4,22.2c-6.1,7.7-12.7,14.9-19.9,21.6
											c-13.2-3.2-25.9-7.9-38-14.1c-47.3-23-85.5-61.3-108.5-108.6c-6.2-12.1-10.9-24.8-14.1-38c6.7-7.2,13.9-13.8,21.6-19.9
											c15.6-13.1,21.1-18,22.2-24.4c2.4-13.7-49.6-95.6-61.3-109.6c-4.9-5.8-9.3-9.7-15-9.7C74.7,0,0,92.4,0,104.3c0,1,1.6,97.1,123,220.7
											c123.5,121.4,219.7,123,220.7,123c12,0,104.3-74.7,104.3-91.2C448,351.1,444.1,346.7,438.3,341.8L438.3,341.8z"
                      ></path>
                      <path d="M336,208h32c-0.1-70.7-57.3-127.9-128-128v32C293,112.1,335.9,155,336,208z"></path>
                      <path d="M416,208h32C447.9,93.2,354.8,0.1,240,0v32C337.2,32.1,415.9,110.8,416,208z"></path>
                    </svg>
                  </div>
                  <div class="Txt">
                    <p>
                    <a href="tel:6005272212">Office: 600 527 221 </a>
                    </p>
                    <p><a href="tel:971504181328">Mobile: +971 50 418 1328</a></p>
                  </div>
                </li>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 384 512">
                      <g id="Pin">
                        <path
                          d="M192,0C86,0.1,0.1,86,0,192c0,137.8,178.9,310.5,186.5,317.8c3.1,3,8,3,11,0C205.1,502.5,384,329.8,384,192
											C383.9,86,298,0.1,192,0z M192,280c-48.6,0-88-39.4-88-88s39.4-88,88-88s88,39.4,88,88C280,240.6,240.6,280,192,280z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div class="Txt">
                  <p>Al Nasr Plaza – Oud Metha – Dubai</p>
                  </div>
                </li>
              </ul>
              {/* <!-- <h4>Sharjah – Al Zahiya</h4>
						<p>B01, Ground Floor, North Entrance – Sharjah Book Authority – Al Zahiya, Sharjah, UAE</p>
						<p>Office: 600 527 221 </br>Mobile: +971 56 403 1122</p>
						<div class="con-loction">
							<p><i class="fa-thin fa-location-dot"></i>Location Map</p>
						</div> --> */}
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="location-main">
          <div class="location-head">
            <div class="head flex">
              <div class="icon">
                <img class="icon" src={uae} alt="" />
              </div>
              ABU DHABI (INFORMATION CENTER)
            </div>
            <div class="box-contact" id="load">
              <ul>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 512 383.5">
                      <path
                        d="M298.8,249.4c-12.7,8.5-27.5,13-42.8,13c-15.3,0-30.1-4.5-42.8-13L3.4,109.6c-1.2-0.8-2.3-1.6-3.4-2.4v229.2
											c0,26.3,21.3,47.1,47.1,47.1h417.7c26.3,0,47.1-21.3,47.1-47.1V107.1c-1.1,0.8-2.2,1.6-3.4,2.4L298.8,249.4z"
                      ></path>
                      <path
                        d="M20,84.6l209.8,139.9c7.9,5.3,17,7.9,26.1,7.9c9.1,0,18.2-2.6,26.1-7.9L492,84.6c12.6-8.4,20-22.4,20-37.5
											c0-26-21.1-47.1-47.1-47.1H47.1C21.1,0,0,21.1,0,47.1C0,62.2,7.5,76.2,20,84.6z"
                      ></path>
                    </svg>
                  </div>
                  <div class="Txt">
                    <a href="mailto:info@learnersuae.com">
                      info@learnersuae.com
                    </a>
                  </div>
                </li>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 448 448">
                      <path
                        d="M438.3,341.8c-14-11.7-96-63.7-109.6-61.3c-6.4,1.1-11.3,6.6-24.4,22.2c-6.1,7.7-12.7,14.9-19.9,21.6
											c-13.2-3.2-25.9-7.9-38-14.1c-47.3-23-85.5-61.3-108.5-108.6c-6.2-12.1-10.9-24.8-14.1-38c6.7-7.2,13.9-13.8,21.6-19.9
											c15.6-13.1,21.1-18,22.2-24.4c2.4-13.7-49.6-95.6-61.3-109.6c-4.9-5.8-9.3-9.7-15-9.7C74.7,0,0,92.4,0,104.3c0,1,1.6,97.1,123,220.7
											c123.5,121.4,219.7,123,220.7,123c12,0,104.3-74.7,104.3-91.2C448,351.1,444.1,346.7,438.3,341.8L438.3,341.8z"
                      ></path>
                      <path d="M336,208h32c-0.1-70.7-57.3-127.9-128-128v32C293,112.1,335.9,155,336,208z"></path>
                      <path d="M416,208h32C447.9,93.2,354.8,0.1,240,0v32C337.2,32.1,415.9,110.8,416,208z"></path>
                    </svg>
                  </div>
                  <div class="Txt">
                    <p>
                    <a href="tel:6005272212">Office: 600 527 221 </a>
                    </p>
                    <p><a href="tel:971504181328">Mobile: +971 50 418 1328</a></p>
                  </div>
                </li>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 384 512">
                      <g id="Pin">
                        <path
                          d="M192,0C86,0.1,0.1,86,0,192c0,137.8,178.9,310.5,186.5,317.8c3.1,3,8,3,11,0C205.1,502.5,384,329.8,384,192
											C383.9,86,298,0.1,192,0z M192,280c-48.6,0-88-39.4-88-88s39.4-88,88-88s88,39.4,88,88C280,240.6,240.6,280,192,280z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div class="Txt">
                  <p>Office No. 105, 1st Floor, Sama Tower,   Near NMC Hospital, Abu Dhabi, UAE</p>
                  </div>
                </li>
              </ul>
              {/* <!-- <h4>Sharjah – Al Zahiya</h4>
						<p>B01, Ground Floor, North Entrance – Sharjah Book Authority – Al Zahiya, Sharjah, UAE</p>
						<p>Office: 600 527 221 </br>Mobile: +971 56 403 1122</p>
						<div class="con-loction">
							<p><i class="fa-thin fa-location-dot"></i>Location Map</p>
						</div> --> */}
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="location-main">
          <div class="location-head">
            <div class="head flex">
              <div class="icon">
                <img class="icon" src={qatar} alt="" />
              </div>
              DOHA – QATAR
            </div>
            <div class="box-contact" id="load">
              <ul>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 512 383.5">
                      <path
                        d="M298.8,249.4c-12.7,8.5-27.5,13-42.8,13c-15.3,0-30.1-4.5-42.8-13L3.4,109.6c-1.2-0.8-2.3-1.6-3.4-2.4v229.2
											c0,26.3,21.3,47.1,47.1,47.1h417.7c26.3,0,47.1-21.3,47.1-47.1V107.1c-1.1,0.8-2.2,1.6-3.4,2.4L298.8,249.4z"
                      ></path>
                      <path
                        d="M20,84.6l209.8,139.9c7.9,5.3,17,7.9,26.1,7.9c9.1,0,18.2-2.6,26.1-7.9L492,84.6c12.6-8.4,20-22.4,20-37.5
											c0-26-21.1-47.1-47.1-47.1H47.1C21.1,0,0,21.1,0,47.1C0,62.2,7.5,76.2,20,84.6z"
                      ></path>
                    </svg>
                  </div>
                  <div class="Txt">
                    <a href="mailto:info@learnersqatar.com">
                    info@learnersqatar.com
                    </a>
                  </div>
                </li>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 448 448">
                      <path
                        d="M438.3,341.8c-14-11.7-96-63.7-109.6-61.3c-6.4,1.1-11.3,6.6-24.4,22.2c-6.1,7.7-12.7,14.9-19.9,21.6
											c-13.2-3.2-25.9-7.9-38-14.1c-47.3-23-85.5-61.3-108.5-108.6c-6.2-12.1-10.9-24.8-14.1-38c6.7-7.2,13.9-13.8,21.6-19.9
											c15.6-13.1,21.1-18,22.2-24.4c2.4-13.7-49.6-95.6-61.3-109.6c-4.9-5.8-9.3-9.7-15-9.7C74.7,0,0,92.4,0,104.3c0,1,1.6,97.1,123,220.7
											c123.5,121.4,219.7,123,220.7,123c12,0,104.3-74.7,104.3-91.2C448,351.1,444.1,346.7,438.3,341.8L438.3,341.8z"
                      ></path>
                      <path d="M336,208h32c-0.1-70.7-57.3-127.9-128-128v32C293,112.1,335.9,155,336,208z"></path>
                      <path d="M416,208h32C447.9,93.2,354.8,0.1,240,0v32C337.2,32.1,415.9,110.8,416,208z"></path>
                    </svg>
                  </div>
                  <div class="Txt">
                    <p>
                      <a href="tel:+97451383777">+974 5138 3777</a>
                    </p>
                    <p></p>
                  </div>
                </li>
                <li>
                  <div class="iconB">
                    <svg className="w-10 h-10" viewBox="0 0 384 512">
                      <g id="Pin">
                        <path
                          d="M192,0C86,0.1,0.1,86,0,192c0,137.8,178.9,310.5,186.5,317.8c3.1,3,8,3,11,0C205.1,502.5,384,329.8,384,192
											C383.9,86,298,0.1,192,0z M192,280c-48.6,0-88-39.4-88-88s39.4-88,88-88s88,39.4,88,88C280,240.6,240.6,280,192,280z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div class="Txt">
                    <p>
                    Office No: 17, Level 2 Block F Mirqab Mall
                    </p>
                  </div>
                </li>
              </ul>
              {/* <!-- <h4>Sharjah – Al Zahiya</h4>
						<p>B01, Ground Floor, North Entrance – Sharjah Book Authority – Al Zahiya, Sharjah, UAE</p>
						<p>Office: 600 527 221 </br>Mobile: +971 56 403 1122</p>
						<div class="con-loction">
							<p><i class="fa-thin fa-location-dot"></i>Location Map</p>
						</div> --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default adressCard;
