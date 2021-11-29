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
                    <div id="outer">
                        <div>
                            <h1>Welcome to Breezy Spot</h1>
                            <p>Breezy Spot Food Truck offers delicious 
                                food and beverages in Downtown Atlanta, 
                                as well as private events and celebrations, 
                                catering, and work-from-home food delivery 
                                across the Southeast.
                            </p>
                        </div>
                        {/* <img src="" alt=""/> */}
                    </div>
                    <h2>Click for more</h2>
                    <Animount id="owners" />
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