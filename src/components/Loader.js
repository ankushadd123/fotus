import React from 'react'

class Loader extends React.Component {

    constructor() {
        super()
        this.state = {
            content : "Loading ....."
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                content : "This is a cool content"
            })
        },3000)
    }

    render() {
       return <div>{this.state.content}</div>
    }

}

export default Loader