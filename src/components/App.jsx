import React from 'react';
import Header from './Header';
import EventList from './EventList';
import MonthlyMenu from './MonthlyMenu';

function App(){
  return (
    <div>
      <Header/>
      <EventList/>
      <MonthlyMenu/>
    </div>
  );
}

export default App;
