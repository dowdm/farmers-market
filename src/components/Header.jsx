import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
         .jtron {
           background-repeat: no-repeat;
           height: 500px;
           width: 100%;
           background-size: cover;
           background-image: url("https://res.cloudinary.com/simpleview/image/fetch/f_auto,q_75/https://res.cloudinary.com/simpleview/image/upload/crm/grapevine/Farmers-Market-8_f8ee1bf0-5056-a36a-07f7a09135be1e80.jpg");
         }

         h1{
           text-align: center;
           font-size: 60px;
           font-family: helvetica;
         }
       `}</style>

      <div className="jtron" ></div>
      <h1>Avery Organics</h1>
       <Link to="/eventlist">Weekly Schedule</Link> | <Link to="/monthlymenu">Monthly Produce Variety</Link>
    </div>
  );
}

export default Header;
