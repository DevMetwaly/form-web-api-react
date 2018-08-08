import React from 'react';
import './Employee.css';

export default function Employee(props) {
    
    return (
        props.employees.map((employee) => {
            
            return (
                <tr key={employee.id}>
                    <th scope="row">{employee.id}</th>
                    <td>{employee.name}</td>
                    <td>{employee.mobile}</td>
                    <td>{employee.telephone}</td>
                    <td>{employee.address}</td>
                    <td>{employee.userName}</td>
                    <td>{employee.password}</td>
                    <td>
                        <button type="button" onClick={props.handleDelete(employee.id)} value={employee.id} className="btn btn-default btn-danger glyphicon glyphicon-remove" ></button>
                        <button type="button" onClick={props.handleEdit(employee.id)} value={employee.id} className="btn btn-default btn-primary">Edit</button>
                    </td>

                </tr>

            );
        })
    );
}