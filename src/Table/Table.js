import React, { Component } from 'react';
import './Table.css';
import Employee from '../Employee/Employee';


export default class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchId:0
        };
    }

    search = (event) =>{
        this.setState({searchId:Number(event.target.value)});
    }

    render(){
        let employees;
        
        if(this.state.searchId===0) employees = <Employee employees={this.props.employees} handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete} /> ;
        else employees = <Employee handleEdit={this.props.handleEdit} employees={this.props.employees.filter((obj) => obj.id===this.state.searchId)} handleDelete={this.props.handleDelete} />

        return (
            <div className="col-lg-8">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Employees
                    </div>
                    <div className="panel-body">
                        <div className="row form-group">
                            <div className="col-lg-12">
                                <div className="">
                                    <label>Search</label>
                                    <input type='text' onChange={this.search} className='form-control' placeholder="Enter ID" name="search" />
                                    <p className="help-block">Leave this field to display all employees' data</p>
                                </div>
                            </div>
                        </div>


                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Telephone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Password</th>
                                    <th scope="col" style={{width:"120px"}}>Control</th>
                                </tr>
                            </thead>
                            <tbody id="employeeDataTable">
                                {employees}
                            </tbody>
                        </table>             
                    </div>
                </div>
            </div>
            
            
        );

    }

}