import React, { Component } from "react";
import "./Login.css";
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import Grid from '@material-ui/core/Grid';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:'',
            employees:props.employees

        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    

    render(){
        return (
            <Grid 
                className="LoginGrid"
                container 
                spacing={0} 
                alignItems={'center'}
                direction={'row'}
                justify={'center'}
            >
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <div className="loginPlatte">Sign In</div>
                    </Grid>
                    <Grid item xs={12}>
                        <form className="loginBody" onSubmit={this.props.handleSubmit(this.state.userName,this.state.password)}>
                            <FormGroup controlId="email" bsSize="large">
                                <ControlLabel>User Name</ControlLabel>
                                <FormControl
                                autoFocus
                                type="text"
                                value={this.state.userName}
                                onChange={this.handleChange}
                                name='userName'
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                                name='password'
                                />
                            </FormGroup>
                            <Button
                                block
                                bsSize="large"
                                type="submit"
                                className='btn btn-primary'
                            >
                                Login
                            </Button>
                        </form>
                    </Grid>
                </Grid>
                
            </Grid>

           


        );

    }




}