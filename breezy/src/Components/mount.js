import React from 'react'
import './mount.css'
import {useState} from 'react'
import {useTransition, animated} from 'react-spring'

const Animount = (props) => {
    const [isVisible, setIsVisible] = useState([])
    const transtion = useTransition(isVisible, {
        from: {x: -100, y: 800, opacity: 0, display: false},
        enter: {x: 0, y: 0, opacity: 1, display: true},
        leave: {x: 100, y: 800, opacity: 0, display: false}
    })
    return(
        <div id="sumLight">
            <button className="tryMe" onClick={() => {
                setIsVisible(v => !v)
            }}>{isVisible ? 'Less': 'More'}</button>
            <div className="container">
                {transtion((style, item) => 
                item ? <animated.div style={style} id={props.id} className="item"><h3>{props.title}</h3></animated.div>: '')}
            </div>
        </div>
    )
}

export default Animount