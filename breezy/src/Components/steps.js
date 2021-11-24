import React from 'react'
import '../App.css'

class Steps extends React.Component{
    render(){
        return(
            <div className="follow">
                <ol>
                    <li>Go to
                        <a href="www.arise.com"> www.arise.com</a>
                    </li>
                    <li>Click on Work From Home</li>
                    <li>Click on Register Now</li>
                    <li>Complete the Registration process</li>
                    <li>Referral ID: 1094947</li>
                    <li>Company Information: CSPID 1094947</li>
                    <li>Breezy Spot EIN:  47-2082381</li>
                </ol>
                <button>Get Started</button>
            </div>
        )
    }
}

export default Steps