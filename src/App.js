import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Form from './Form/Form';
import Table from './Table/Table';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      employees:[],
      isLogged:false,
      crrEmployee:{},
      editEmployee:{
        id:'',
        data:{
          name:'',
          mobile:'',
          telephone:'',
          address:'',
          userName:'',
          password:'',
        }
      }
    };
  }

  getData = () => {
    const axios = require('axios');
    axios.get('http://employeesintern.azurewebsites.net/api/employees')
    .then(response => {
      this.setState({
        employees:response.data
      });      
    })
    .catch(function (error) {
      console.log(error);  
    });
  }

  componentDidMount = () => {
    this.getData();
  }

  handleDelete = (id) => (event) => {
    let employees = this.state.employees;
    employees = employees.filter(emp => emp.id !== id);
    this.setState({employees:employees});

    const axios = require('axios');
    axios.delete(`//employeesintern.azurewebsites.net/api/employees/${id}`)
    .then(response => {
      alert("Data Deleted Successfully");    
    })
    .catch(function (error) {
      console.log(error);  
    });
  }


  handleEdit = (id) => (event) => {
    const employees = this.state.employees;
    const employee = {...employees.filter(emp => emp.id === id)[0]}; 
    delete employee.id;
    const newEmployee = {data:employee,id:id}
    this.setState({editEmployee:newEmployee});
    

    this.child.modifiy(employee,id);
  }


  handleFormSubmit = (data) => (event) => {
    if(event.type === 'submit') event.preventDefault();	
    const getData = this.getData;
    const reset = this.child.reset;
    const axios = require('axios');
    axios.post('http://employeesintern.azurewebsites.net/api/employees', data)
    .then(function (response) {
      alert("Employee Added Successfully");
      reset();
      getData();
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }

  handleLoginSubmit = (userName,password) => (event) => {
    event.preventDefault();
    const employees = this.state.employees;
    const employee = employees.find((employee) => employee.userName===userName && employee.password===password);
    if(employee === undefined) alert("Invalid User Name or Password");
    else this.setState({
          isLogged:true,
          crrEmployee:employee
        });
  }

  handleModifiy = (id,data) => (event) => {
    const getData = this.getData;
    const axios = require('axios');
    const reset = this.child.reset;

    axios.put(`http://employeesintern.azurewebsites.net/api/employees/${id}`,data)
    .then(function (response) {
      alert("Employee Modified Successfully");
      getData();
      reset();
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }


  render() {
    let page = <Login employees={this.state.employees} handleSubmit={this.handleLoginSubmit} />;
    if(this.state.isLogged) page=(
      <div id="page-wrapper">
        <div className="container-fluid">
            <div className="row">
              <Form onRef={ref => (this.child = ref)} handleSubmit={this.handleFormSubmit} handleModifiy={this.handleModifiy}/>
              <Table handleEdit={this.handleEdit} employees={this.state.employees} handleDelete={this.handleDelete} />
          </div>
        </div>
      </div> 
    );
    
    return (
      <div className="App">
        <Header />
        {page}
        

        <div style={{height: "30px"}}></div>
        <Footer />
      </div>
    );
  }
}

export default App;