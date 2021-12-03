import React from 'react'
import '../App.css'
import MenuDisplay from './display'

class Menu extends React.Component{
    render(){
        return(
            <div id="fourth">
                <header>
                    <img src="http://breezyspot.com/wp-content/uploads/2020/11/breezy-spot-1200.png" alt=""/>
                </header>
                <main>
                    <MenuDisplay/>
                    <a href="https://breezyspot.applova.menu/webstore/?session=1637787835510">Order Now</a>
                </main>
                <footer>
                    <img src="http://breezyspot.com/wp-content/uploads/2020/11/breezy-spot-1200.png" alt=""/>
                </footer>
            </div>
        )
    }
}

export default Menu