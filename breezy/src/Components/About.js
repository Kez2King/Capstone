import React from 'react'
import '../App.css'
import BackHome from './homebut'

class Info extends React.Component{
    render(){
        return(
            <div id="second">
                <header>
                    <img src="http://breezyspot.com/wp-content/uploads/2020/11/breezy-spot-1200.png" alt=""/>
                </header>
                <main>
                    {/* <div className="lb"> */}
                        <div id="insight">
                            <h1>About Us Page</h1>
                            <h2>What We Offer?</h2>
                            <p>
                                Breezy Spot is an energetic, 
                                imaginative mobile food truck 
                                company that offers the finest, 
                                high-quality, and delicious Italian 
                                and Tropical Ice, and other snacks.
                            </p>
                            <p>
                                Moderately priced and using the best 
                                domestic and natural ingredients, Breezy 
                                Spot is located in Atlanta. In addition 
                                to its permanent location in Downtown 
                                near the city’s top destinations, events 
                                and workplaces, Breezy Spot also supports 
                                work-from-home events, private parties, and 
                                catering.
                            </p>
                            <p>
                                As a purpose-driven and family-operated company, 
                                the company aims to partner with customers throughout 
                                Atlanta and the Southeast and provide a product and 
                                service that is unmatched.
                            </p>
                            <BackHome/>
                        </div>

                    {/* </div> */}
                    {/* <img src="" alt=""/> */}
                </main>
                <footer>
                    <img src="http://breezyspot.com/wp-content/uploads/2020/11/breezy-spot-1200.png" alt=""/>
                </footer>
            </div>
        )
    }
}

export default Info