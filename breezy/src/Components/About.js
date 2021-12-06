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
                                Breezy Spot is a family owned business
                                dedicated to bringing Italian Ice and delicious
                                meals to the community where we live. We are committed
                                to providing a clean, safe and professional environment
                                to to our community. We are a Black owned business that
                                is committed to promoting Black Owned Businesses in our
                                neighorhood.
                            </p>

                            <p>
                                Each of our products are moderately priced and equipped with the best domestic 
                                and natural ingredients, Breezy Spot is located in Atlanta. In addition to its 
                                permanent location in Downtown near the city’s top destinations, events and workplaces, 
                                Breezy Spot also supports work-from-home events, private parties, and catering.
                            </p>

                            <p>
                                The Goal of Breezy Spot, LLC is to preserve the heritage
                                of our community by bringing Black Owned businesses to our
                                community. The more the community supports Breezy Spot, our 
                                company will be able to give back to the community and promote a 
                                thriving community for us all.
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