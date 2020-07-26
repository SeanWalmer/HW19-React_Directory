import React from 'react';
import "./style.css";

function Table(props) {
    console.log(props)
    return (
        <table className='highlight centered responsive-table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Race</th>
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