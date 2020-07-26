import React from 'react';
import "./style.css";

// function printThis(word) {
//     console.log(word)
// }

function Table(props) {
    console.log(props)
    return (
        <table className='highlight centered responsive-table'>
            <thead>
                <tr>
                    <th></th>
                    <th onClick={() => console.log("Name")}>Name</th>
                    <th onClick={() => console.log("Role")}>Role</th>
                    <th onClick={() => console.log("Race")}>Race</th>
                </tr>
            </thead>

            <tbody>
                {props.crew.map(member => (
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