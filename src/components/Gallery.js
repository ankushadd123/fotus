import React from 'react'
import axios from 'axios'
import Frame from './Frame'

class Gallery extends React.Component {

    constructor() {
        super()
        this.state = {
            profiles : [],
            error : false
        }
    }

    componentDidMount(){
        
       
            axios.get('https://my-json-server.typicode.com/9045902864/tv/db')
            .then(response => {
                    this.setState({
                            profiles : response.data.posts
                        })
                 }).catch(e => {
                    //  alert('error')
                    this.setState({
                        error : true
                    })
                 })          
    }

    

    render() {
            if(this.state.error){
                return <h1>Some error occured ...</h1>
            }
            else {
                const frames = this.state.profiles.map( profile => {
                    return <Frame 
                        name={profile.title} 
                        key={profile.id} 
                        characters={profile.images}></Frame>})
                return (
                    <div>
                        {frames}
                    </div>)
            }
            
            
       
    }
}

export default Gallery