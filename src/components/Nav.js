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

      <div className="button-grid-item">
        <Link to='/clock'><button className="welcome-btn">Clock</button></Link>
      </div>

      <div className="button-grid-item">
        <Link to='/lock'><button className="welcome-btn">Lock</button></Link>
      </div>

      <div className="button-grid-item">
        <Link to='/envelope'><button className="welcome-btn">Envelope</button></Link>
      </div>

      <div className="button-grid-item">
        <Link to='/opening'><button className="welcome-btn">Opening</button></Link>
      </div>

      </div>
    </Fragment>
  )
}


export default Nav;
