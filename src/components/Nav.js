import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';



const Nav = () => {
  return (
    <Fragment>
      <div className="button-grid-container">

      <div className="button-grid-item">
        <Link to='/info' ><button className="welcome-btn">Play</button></Link>
      </div>

      <div className="button-grid-item">
        <button className="welcome-btn">Info</button>
      </div>
      </div>
    </Fragment>
  )
}


export default Nav;
