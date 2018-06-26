import React from 'react';
import Header from './Header';
import EventList from './EventList';
import MonthlyMenu from './MonthlyMenu';
import { Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route exact path='/eventlist' component={EventList} />
          <Route exact path='/monthlymenu' component={MonthlyMenu} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
