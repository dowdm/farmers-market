import React from 'react';
import PropTypes from 'prop-types';

function Menu(props){
  return (
    <div>
      <h3>{props.month}</h3>
      <p><em>{props.selection.map((fruit, index)=>
        <div key={index}>{fruit}</div>)}</em></p>
      <hr/>
    </div>
  );
}
Menu.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};


export default Menu;
