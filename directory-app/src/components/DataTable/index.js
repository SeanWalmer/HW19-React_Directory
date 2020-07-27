import React from 'react';
import "./style.css";


function Table(props) {
    // console.log(props)
    return (
        <table className='highlight centered responsive-table'>
            <thead>
                <tr>
                    <th></th>
                    {/* () => functions are to delay functions till we actually click and so they dont launch on page load */}
                    <th onClick={() => props.sortName()}>Name<span className="material-icons sortIcon">sort_by_alpha</span></th>
                    <th onClick={() => props.sortRole()}>Role<span className="material-icons sortIcon">import_export</span></th>
                    <th onClick={() => props.sortRace()}>Race<span className="material-icons sortIcon">import_export</span></th>
                </tr>
            </thead>

            <tbody>
                {/* Cycles through the crew list passed in through 
                props and cretes an entry for each */}
                {props.currentCrew.map(member => (
                    <tr key={member.id}>
                        <td><img src={member.picture} alt="crew member headshot" width="50" height="50"></img></td>
                        <td>{member.name}</td>
                        <td>{member.role}</td>
                        <td>{member.race}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;