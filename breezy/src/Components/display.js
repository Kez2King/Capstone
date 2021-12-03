import React from 'react'
import './display.css'

class MenuDisplay extends React.Component{
    render(){
        return(
            <div className="menuItems">
                <div id="burger"></div>
                <div id="hotdog"></div>
                <div id="nachos"></div>
                <div id="icee"></div>
                <div id="candy"></div>
                <div id="cc"></div>
                <div id="chips"></div>
                <div id="pastries"></div>
                <div id="drinks"></div>
            </div>
        )
    }
}

export default MenuDisplay