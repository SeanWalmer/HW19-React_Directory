import React from 'react';
import crew from '../me.json'
import "./style.css";
import Table from '../DataTable';

function Main() {
    console.log(crew)
  return (
      <div>
          <h3 className="center-align">Normandy SR2 Crew Directory</h3>
          <br></br>
          <Table crew={crew} />
      </div>
  );
}

export default Main;