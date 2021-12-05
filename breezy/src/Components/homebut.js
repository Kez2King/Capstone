import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

class BackHome extends React.Component{
    render(){
        return(
            <Link to="/"><button id="returnP">Back Home</button></Link>
        )
    }
}
export default BackHome