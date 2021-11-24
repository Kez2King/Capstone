import React from 'react'
import '../App.css'
import Animount from './mount'

class Home extends React.Component{
    render(){
        return(
            <div id="first">
                <header>
                    <img src="http://breezyspot.com/wp-content/uploads/2020/11/breezy-spot-1200.png" alt=""/>
                </header>
                <main>
                    <h1>Welcome to Breezy Spot</h1>
                    <p>Click for more</p>
                    <Animount id="owners"/>
                    <Animount id="menu"/>
                    <Animount id="work"/>
                    <Animount id="events"/>
                </main>
                <footer>
                    <img src="http://breezyspot.com/wp-content/uploads/2020/11/breezy-spot-1200.png" alt=""/>
                </footer>
            </div>
        )
    }
}

export default Home