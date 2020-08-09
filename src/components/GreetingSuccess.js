import React from 'react'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import style from './../style/style.css'


class GreetingSuccess extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name : props.user,
            partner : props.partner,
            forward : props.forward,
            showSpinner : true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                showSpinner : false
            })
        }, 3000)
    }

    render() {

        const hide = {
            display: "none"
        }
        const view = {
            display:"inline-block"
        }

        return (
            <div className="form-custom">
                <div className="row-custom" >
                     <Spinner 
                        animation="border" 
                        role="status" 
                        variant="primary"
                        style={this.state.showSpinner ? view : hide}> </Spinner>
                </div>
                <br />
                <br />
                <div className="row-custom">
                      <h2>{this.state.name} and {this.state.partner}, you two are made for each other !</h2>
                </div>
               
                <br />
                <br />
                <div className="row-custom">
                      <Button varient="primary" onClick={this.state.forward}>Click me</Button>
                </div>
              
            </div>
        )
    }
}

export default GreetingSuccess