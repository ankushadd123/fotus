import React from 'react'
import shoes from './../daenerysT_254466.jpg'
import './../style/style.css'
import { Button } from 'react-bootstrap'

class Frame extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            characters : props.characters,
            name : props.name,
            imageNumber : 0 
        }
        this.next = this.next.bind(this)
    }

    next() {
       
        this.setState(currentState => {
            
            if(currentState.imageNumber === currentState.characters.length - 1 )
                return {
                    imageNumber : 0
                }
            else
                return {
                    imageNumber : currentState.imageNumber + 1
                }
        })
    }

    render() {
       
        return(
           
            <div className="row-custom">
                <img className="picture" src={this.state.characters[this.state.imageNumber]} alt="error"></img>
                <br/>
                <br/>
                <h2>{this.state.name}</h2>
                <Button varient="info" onClick={this.next}>   Next   </Button>
                <br/>
                <br/>
            </div>
        )
        
    }
}

export default Frame