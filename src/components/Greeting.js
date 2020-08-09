import React from 'react'
import Form from 'react-bootstrap/Form' 
import { FormGroup, FormControl, Button, FormLabel } from 'react-bootstrap'
import style from './../style/style.css'
import GreetingSuccess from './GreetingSuccess'

class Greeting extends React.Component {

    constructor(){
        super()
        this.state = {
            user : '',
            partner : '',
            isSuccess : false
        }
        this.updateState = this.updateState.bind(this)
        this.forward = this.forward.bind(this)
    }

    updateState(event) {
        console.log('updating state')
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    forward(){
        // alert('being forward')
        this.setState(currentState => {
            return {
                isSuccess : !currentState.isSuccess
            }
        })
    }

    render() {
        if(this.state.isSuccess)
             return <GreetingSuccess user = {this.state.user} partner = {this.state.partner} forward={this.forward}/>
        else
            return (
                <div className="container">
                    <Form className="form-custom" onSubmit={this.forward}>
                        <FormGroup>
                            <FormLabel>Enter your name :</FormLabel>
                            <FormControl 
                                    type="text" 
                                    placeholder="Enter name"
                                    name="user"
                                    value={this.state.user}
                                    onChange={this.updateState}>
                            </FormControl>
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>Enter your partner's name :</FormLabel>
                            <FormControl 
                                    type="text" 
                                    placeholder="Enter your partner's name"
                                    name="partner"
                                    value={this.state.partner}
                                    onChange={this.updateState}>
                            </FormControl>
                        </FormGroup>

                        <FormGroup>
                            <Button varient="primary" onClick={this.forward}>Click me</Button>
                        </FormGroup>

                    </Form>
                </div>
            )
    }
}

export default Greeting