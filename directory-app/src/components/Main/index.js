import React from 'react';
import Crew from '../me.json'
import "./style.css";
import Table from '../DataTable';

function Main() {
    console.log(Crew)
  return (
      <div>
          <h3 className="center-align">Normandy SR2 Crew Directory</h3>
          <Table />
      </div>
  );
}

export default Main;