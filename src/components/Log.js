import React from 'react'

class Log extends React.Component {

    constructor() {
        super()
        this.state = {
            isLogIn : false
        }
        this.handleLogButton=this.handleLogButton.bind(this)
    }
    
    handleLogButton () {
        this.setState(currentState => {
            return {
                isLogIn : !currentState.isLogIn
            }
        })
    }

    render() {

        const boxStyle = {
            marginRight : "20%",
            marginLeft : "20%",
            marginTop : "20%",
            marginBottom : "20%"
        }

        const element = {
            align : "center",
            textAlign : "center" 
        }

        const header = {
            align : "center",
            textAlign : "center",
            backgroundColor : "tomato",
            height: "60px"
        }

       
        return <div>
                    <header style={header}>
                        <h1 style={element}>{this.state.isLogIn ? "You are logged in" : "You are logged out"}</h1>
                    </header>
                    <div style={boxStyle}>
                        <div style={element}> 
                            <button 
                                style={element}
                                onClick={this.handleLogButton}>
                            {this.state.isLogIn ? "Log out" : "Log in"}
                            </button>
                        </div>
                    </div>
                </div>
    }
}

export default Log