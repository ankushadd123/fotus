import React from 'react'
import Form from 'react-bootstrap/Form'
import { FormGroup, FormLabel, Button, FormControl } from 'react-bootstrap'
import style from './../style/style.css'
import LogInSuccess from './LogInSuccess'

class AppForm extends React.Component {

    constructor(){
        super()
        this.state={
            email : '',
            password : '',
            isSuccess : false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.submit = this.submit.bind(this)
    }

    handleInputChange(event) {       
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submit() {
        if(this.state.email === 'ankushinfocomm@gmail.com' && this.state.password === 'admin')
            this.setState({
                isSuccess:true
            })
        else alert('Wrong credentials')
    }
    render() {

        if(this.state.isSuccess === true)
            return <LogInSuccess />
        else
            return (
                <div className="container">
                    <div>
                        <Form className="form-custom" onSubmit={this.submit}>
                            <FormGroup>
                                <FormLabel>Enter your username or email :</FormLabel>
                                <FormControl 
                                        type="email" 
                                        placeholder="Enter email / username" 
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}></FormControl>
                            </FormGroup>
                            
                                <FormGroup>
                                    <FormLabel>Enter your password :</FormLabel>
                                    <FormControl 
                                        type="password" 
                                        placeholder="Enter password" 
                                        name="password"
                                        value={this.state.passwrod}
                                        onChange={this.handleInputChange}></FormControl>
                                </FormGroup>
                                <br />
                                <br />
                                <FormGroup>
                                    <Button type="primary">Log in</Button>
                                </FormGroup>
                        </Form>
                </div>
                </div>
            )
    }
}

export default AppForm
