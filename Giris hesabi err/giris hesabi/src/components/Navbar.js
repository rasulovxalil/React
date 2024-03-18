import React from 'react';
import PropTypes from "prop-types";

 function Navbar(props) {
  return (
    <div>
      <h1>{props.tittle}</h1>
    </div>
  )
}
Navbar.propTypes = {
  tittle : PropTypes.string.isRequired 
}
Navbar.defaultProps = {
  tittle : "Default App"
}

export default Navbar;
