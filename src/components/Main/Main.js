import React, { Component } from 'react';
import Video from './video.mp4'
import { Button } from "shards-react"

import "./Main.css"
import "./anim.scss"

class Main extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (


      <div>

        <div id="app">

  


          {/* <div class="grid">
          <div class="grid-line"></div>
          <div class="grid-line"></div>
          <div class="grid-line"></div>
          <div class="grid-line"></div>
          <div class="grid-line"></div>
        </div> */}

          <div id="xhr">
            <div id="h">
        {/* <video className='video' autoPlay loop muted style={{width:'100%', height:'100%'}}>
          <source src={Video} type='video/mp4'></source>
        </video> */}
              <div id="h-pagi-container">
                <div id="h-pagi-wrap" style={{ transform: "translate3d(0.001px, 0px, 0px)" }}>
                  <div id="h-pagi" style={{ transform: "translate3d(0px, 0%, 0px)", color: "black" }}>
                    <div id="h-pagi-curr">1</div>
                    <div id="h-pagi-total">&nbsp;—&nbsp;0</div>
                  </div>
                </div>
              </div>
              <div id="h-section-wrap" style={{ transform: "translate3d(0px, -0.003px, 0px)" }}>
                <section className="h-section">
                  <div className="h-title-over cursor-hide link active"><a className="link-href"
                    href=""></a>
                    <h2 className="h-title-container"><span className="h-title-wrap" style={{ fontWeight: "550" }}>
                      <span className="h-title particletext bubbles" style={{ transform: "translate3d(0%, 0px, 0px)", fontSize: "150px" }}>Downtown</span>
                      

                      {/* <span className="particletext bubbles">Bubbles</span> */}

                    </span>
                    </h2>
                    {/* </h2>
                    <div className="h-title-stroke-container">
                      <div className="h-title-stroke-wrap">
                        <div className="h-title-stroke"
                          style={{ transform: "translate3d(0%, 0px, 0px)", fontSize: "150px" }}>Downtown</div>
                      </div>
                    </div>
                    <div href='/register' style={{alignContent:'center',marginTop: '200px'}}>
                           <u>
                             <b>
                           <a onClick={()=> window.open('/register',"_self")} style={{fontSize: '30px'}}>Link Accounts</a>
                           </b>
                           </u>
                           
                         </div>
                    <div className="h-line-container">
                      <div className="h-line-wrap">
                        <div className="h-line" style={{ transform: "translate3d(0px, 0%, 0px)" }}>
                          <div className="h-line-over"></div>
                        </div>
                      </div>
                      <div className="h-no-wrap">
                        <div className="h-no" style={{ transform: "translate3d(0px, 0%, 0px)" }}>
                          <div className="h-no-over">01</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-data" style={{ color: "black" }}>
                    <div className="h-type-wrap">
                      <div className="h-type" style={{ transform: "translate3d(0px, 0%, 0px)" }}>DownTown</div>
                    </div>
                    <div className="h-year-wrap">
                      <div className="h-year" style={{ transform: "translate3d(0px, 0%, 0px)" }}>2020</div>
                    </div>
                  </div>


                </section>
                <div className="boxcont">

                  <div style={{ width: "12%" }}>
                    <h2 className="h-title-container vertical-text"><span className="h-title-wrap" style={{ fontWeight: "550" }}>
                      <span className="h-title" style={{ transform: "translate3d(0%, 0px, 0px)", fontSize: "150px" }}>Expand.</span></span></h2>
                  </div>

                  <div style={{ width: "60%" }}>
                    <h1 className="headings">Grow Your Bussiness</h1>

                    <div className="paragraph">
                      Our mission is to allow businesses to sell their products without the threat of monopolies. This gives smaller businesses the opportunity to Expand.
                    </div>

                  </div>

                  <div style={{ width: "20%" }}>

                  </div>
                </div>

                <div className="boxcont">

                  <div style={{ width: "12%" }}>
                    <h2 className="h-title-container vertical-text"><span className="h-title-wrap" style={{ fontWeight: "550" }}>
                      <span className="h-title" style={{ transform: "translate3d(0%, 0px, 0px)", fontSize: "150px" }}>Fair.</span></span></h2>
                  </div>

                  <div style={{ width: "60%" }}>
                    <h1 className="headings">No Algorithm</h1>

                    <div className="paragraph">
                      In a safe marketplace, there should be no such thing as an algorithm. We rely on a randomization giving every business the opportunity to display their awesome product.
                    </div>

                  </div>

                  <div style={{ width: "20%" }}>

                  </div>
                </div>


                <div className="boxcont" >

                  <div style={{ width: "12%" }}>
                    <h2 className="h-title-container vertical-text"><span className="h-title-wrap" style={{ fontWeight: "550" }}>
                      <span className="h-title" style={{ transform: "translate3d(0%, 0px, 0px)", fontSize: "150px" }}>Price.</span></span></h2>
                  </div>

                  <div style={{ width: "60%" }}>
                    <h1 className="headings">Competitive Prices</h1>

                    <div className="paragraph">
                      The cost of oppening an account is free. Premium Options are Availible
                    </div> */}
               {/* <div className="boxcont" >
                    <div className="priceBox">

                      <div class="[ price-option price-option--low ]">
                        <div class="price-option__detail">
                          <span class="price-option__type">Price</span>
                          <span class="price-option__cost">$0.00</span>
                          <span class="price-option__type">+</span>
                          <span class="price-option__type">5%</span>
                        </div>
                        <a href="#" class="price-option__purchase">Free</a>
                      </div>
                      <div class="[ price-option price-option--mid ]">
                        <div class="price-option__detail">
                          <span class="price-option__type">Price</span>
                          <span class="price-option__cost">$14.99</span>
                          <span class="price-option__type">+</span>
                          <span class="price-option__type">3%</span>
                        </div>
                        <a href="#" class="price-option__purchase">Premium</a>
                      </div>

                    </div>

                    <Button outline theme="secondary" href="/signup"  style={{ pointerEvents: "visible",fontSize: "16px", fontWeight: "bold" ,marginTop:"150px" }} >
                      Register
                      </Button>

                  </div>

                  <div style={{ width: "20%" }}>

                  </div>
                  
                </div>
                </section>

              </div>
              */}

            </div>
            </section>
            </div>
            </div>
            

            </div> 

          </div>




          <nav id="nav">
            <div className="nav-link-wrap">
              <a className="nav-link active" href="/signin">
                <span
                  className="nav-link-inner" style={{ transform: "translate3d(0px, 0%, 0px)" }}>
                  <span
                    className="nav-link-black" style={{ pointerEvents: "visible", fontSize: "18px", opacity: 1, display: "block", margin: "0px" }}>Login</span>
                </span>
              </a>
            </div>
          
            <div className="nav-link-wrap" style={{ opacity: 1 }}>
              <a className="nav-link active" href="/signup"><span className="nav-link-inner"
                style={{ transform: "translate3d(0px, 0%, 0px)" }}>
                <span className="nav-link-black" style={{ pointerEvents: "visible", opacity: 1, fontSize: "18px" }}>Sign Up</span>
              </span></a></div>
            <div className="nav-link-wrap"><a className="nav-link" href=""><span
              className="nav-link-inner" style={{ transform: "translate3d(0px, 0%, 0px)" }}><span
                className="nav-link-black" style={{ opacity: 1 }}></span><span className="nav-link-white"
                  style={{ opacity: 0 }}>Archive</span></span></a></div>
          </nav>


        </div>




    )
  }
}

export default Main;


