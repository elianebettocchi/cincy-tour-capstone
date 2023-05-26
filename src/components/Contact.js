import React from "react";
import {Link} from 'react-router-dom'

const Contact = () => {
    return(
        <div>
   <section id="trip-planner" className="d-flex justify-content-center" >
     <div>
      <div>
        <h2>Select Your Trip Date</h2>
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <input type="text" className="form-control mb-2 mr-sm-2" placeholder="Start Date" />
            <input type="text" className="form-control mb-2 mr-sm-2" placeholder="End Date" />
          </div>
        </div>
      </div>

      <div>
        <h2>Traveling With</h2>
        <div>
          <button>Alone</button>
          <button>With Family</button>
          <button>With Friends</button>
          <button>With a Partner</button>
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
        </div>
    )
}

export default Contact