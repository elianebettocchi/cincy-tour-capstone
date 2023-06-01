import React from "react";
import { FaArrowDown, FaArrowUp, FaLinkedin, FaLink, FaGithub, FaDiceD20 } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
// import axios from "axios";

const Contact = () => {
    return(
        <div>
{/* //section one "contact" landing page */}
<section id="section-one">
            <header className="container-fluid" id="contact">
                <div className="container-fluid text-center text-black">
                    <br />
                    <h1 className="display-3" id="contact-header"></h1>
                    <a href="https://www.artworkscincinnati.org/mural/reaching-new-heights/" target="_blank" rel="noopener noreferrer"><Button variant="info"><i class="bi bi-info-lg"></i></Button></a>
                    <br />
                    <a href="/contact#trip-planner">
                        <FaArrowDown className="icons" />
                    </a>
                </div>
            </header>
        </section>
        <br />

   <section id="trip-planner" className="d-flex justify-content-center" >
     <div className="border border-white">
      <div>
        <h2>Select Your Trip Date</h2>
        <div className="justify-content-center">
          <div className="text-center">
            <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Start Date" />
            <input type="text" className="form-control mb-2 mr-sm-2" placeholder="End Date" />
          </div>
        </div>
      </div>

      <div>
        <h2>Traveling With</h2>
        <div className="btn-group" >
          <button className="btn btn-primary btn-light">Alone</button>
          <button className="btn btn-primary btn-light">With Family</button>
          <button className="btn btn-primary btn-light">With Friends</button>
          <button className="btn btn-primary btn-light">With a Partner</button>
        </div>
      </div>

      <div>
        <h2>Select Category</h2>
        <div>
          <button>Arts</button>
          <button>Food</button>
          <button>Outdoor</button>
          <button>Historical</button>
          <button>Sports</button>
          <button>Family Fun</button>
        </div>
      </div>
    </div>
  </section>
  <section id="contact-form" className="container justify-content-center">
  <div className="row"><div className="col-12">
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfWis1vbFlVjI-IzWU2xBNLHicrYoAbjLrwrAfEoqmSM5IFAA/viewform?embedded=true" width="100%" height="880" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Loading…</iframe>
    {/*<h2 className="mb-4">Questions? Contact us Below!</h2>
    <div className="text-center">
      <textarea name="contact" id="contact" className="form-control mb-2" rows="10"></textarea>
      <button className="btn btn-primary btn-light">Submit</button>
    </div>*/}
  </div></div>
</section>

   
        </div>
    )
}

export default Contact