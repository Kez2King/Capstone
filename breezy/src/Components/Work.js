import React from 'react'
import '../App.css'
import Steps from './steps'

class Work extends React.Component{
    render(){
        return(
            <div id="fifth">
                <header>
                    <img src="http://breezyspot.com/wp-content/uploads/2020/11/breezy-spot-1200.png" alt=""/>
                </header>
                <main>
                    <div>
                        <h1>Work From Home</h1>
                        <p>
                            Breezy Spot offers Work From 
                            Home opportunities. Work from 
                            home with companies including: 
                            TurboTax, Comcast, Home Depot 
                            and many others.
                        </p>
                        <h2>Registar Now</h2>
                        <Steps/>
                    </div>
                </main>
                <footer>
                    <img src="http://breezyspot.com/wp-content/uploads/2020/11/breezy-spot-1200.png" alt=""/>
                </footer>
            </div>
        )
    }
}

export default Work