import React from 'react'
import '../App.css'
import Animount from './mount'



class Home extends React.Component{
    render(){
        return(
            <div id="first">
                <header>
                </header>
                <main>
                    <div id="outer">
                        <div id="firstop">
                            <h1>Welcome to Breezy Spot</h1>
                            <p>Breezy Spot Food Truck offers delicious 
                                food and beverages in Downtown Atlanta, 
                                as well as private events and celebrations, 
                                catering, and work-from-home food delivery 
                                across the Southeast.
                            </p>
                        </div>
                    </div>
                    <div className="lb">
                        <h2><u>Click for more</u></h2>
                        <Animount id="owners" location="/AboutUs"/>
                        <Animount id="menu" location="/Menu"/>
                        <Animount id="work" location="/Work"/>
                        <Animount id="events" location="/Events"/>
                    </div>
                </main>
                <footer></footer>
            </div>
        )
    }
}

export default Home