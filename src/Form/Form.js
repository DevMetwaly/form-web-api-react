import React,{Component} from 'react';
import './Form.css';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            employee:{
                name:'',
                mobile:'',
                telephone:'',
                address:'',
                userName:'',
                password:'',
            },
            editDisabled:true,
            id:''
        };
    }




    componentDidMount() {
    this.props.onRef(this)
    }
    componentWillUnmount() {
    this.props.onRef(undefined)
    }
    modifiy = (employee,id) => {
        this.setState({employee:employee,id:id,editDisabled:false});
        
    }
    reset = () => {
        this.setState({employee:
                            {
                                name:'',
                                mobile:'',
                                telephone:'',
                                address:'',
                                userName:'',
                                password:'',
                            },
            id:'',
            editDisabled:true
        });
    }
    





    handleChange = (event) => {
        let employee = {...this.state.employee};
        employee[event.target.name] = event.target.value;
        this.setState({
            employee:employee
        });

    }
    render(){
        
        return (
           
            <div className="col-lg-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Add a new employee
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="AddEmpForm" onSubmit={this.props.handleSubmit(this.state.employee)}>
                                    <label>Name</label>
                                    <div className="form-group">
                                        <input id="name" value={this.state.employee.name} onChange={this.handleChange} name="name" type="text" className="form-control" placeholder="name" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,25}$" required />
                                    </div>
                                    <label>Mobile</label>
                                    <div className="form-group input-group">
                                        <span className="input-group-addon">#</span>
                                        <input id="mobile" value={this.state.employee.mobile} onChange={this.handleChange} name="mobile" type="text" className="form-control" placeholder="Mobile" pattern="[0-9]+" required />
                                    </div>
                                    <label>Telephone</label>
                                    <div className="form-group input-group">
                                        <span className="input-group-addon">#</span>
                                        <input id="telephone" value={this.state.employee.telephone} onChange={this.handleChange} name="telephone" type="text" className="form-control" placeholder="Telephone" pattern="[0-9]+" required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Address</label>    
                                        <input id="address" value={this.state.employee.address} onChange={this.handleChange} name="address" type="text" className="form-control" placeholder="Address" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input id="username" value={this.state.employee.userName} onChange={this.handleChange} name="userName" type="text" className="form-control" placeholder="User Names" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" required />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input id="password" value={this.state.employee.password} onChange={this.handleChange} name="password" minLength='5' className="form-control" type="password" required />
                                        <p className="help-block">This will be modified by the employee later.</p>
                                    </div>
                                    <button type="submit" className="btn btn-default btn-success" >Submit</button>
                                    <button disabled={this.state.editDisabled} onClick={this.props.handleModifiy(this.state.id,this.state.employee)} id='modifiyButton' type="button" className="btn btn-default btn-primary ">Modifiy</button>
                                    <button type="reset" onClick={this.reset} className="btn btn-default">Reset</button>
                                </form>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
                   
        );
    }
}