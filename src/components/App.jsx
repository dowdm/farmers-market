import React from 'react';
import Header from './Header';
import EventList from './EventList';
import MonthlyMenu from './MonthlyMenu';

function App(){
  return (
    <div>
      <style jsx>{`
         .poopy{
           display: flex;
         }

         .wide{
           width:45%;
           margin:1%;
         }
       `}</style>

      <Header/>
      <div className="poopy">
        <div className="wide">
          <EventList/>
        </div>
        <div className="wide">
          <MonthlyMenu/>
        </div>
      </div>
    </div>
  );
}

export default App;
