import React, {Component} from 'react'

export default class Svg extends Component {
    constructor() {
        super();
        this.state = {
            r: 255,
            b: 0,
            isRed: true,
            last: 0
        }
    }

    //In componentDidMount, create a callback for the requestAnimationFrame
    componentDidMount() {
        //must create in componentDidMount!
        const animate = (timestamp) => {
            //assign the color change
            if(timestamp - this.state.last >= 200){
                let {r, b, isRed, last} = this.state
                last = timestamp
                if(isRed){
                    if(r > 0 && b < 255){
                        r -= 5
                        b += 5
                    } else if (r <= 0 && b >= 255){
                        b = 255
                        r = 0
                        isRed = false
                    }
                    this.setState({
                        r, b, isRed, last
                    })
                    
                } else {
                    if(b > 0 && r < 255){
                        b -= 5
                        r += 5
                    } else if (b <= 0 && r >= 255){
                        r = 255
                        b = 0
                        isRed = true
                    }
                    this.setState({
                        r, b, isRed, last
                    })
                }
                
            }
            //recursive call - this ensures that this keeps running!            
            this.rafId = requestAnimationFrame(animate);
            
        };
        //call to START the animation
        this.rafId = requestAnimationFrame(animate);
    }

    //ensure the animation stops if the component dies
    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
    }

    render(){
        return (
            <div className="plainSVGDiv">
                <p>
                    This animation tracks the r & b of color in state. It draws a plain, 
                    circular SVG, and changes the color/stroke based on state to smoothly 
                    change from red to blue.
                    It has a condition for time so that the changes occur
                    every second, not every animation frame.
                </p>
                
                <svg height="100" width="100" ref="mySVG">
                    <circle ref="circleSVG" cx="50" cy="50" r="40" stroke={`rgb(${this.state.r}, 0, ${this.state.b})`} strokeWidth="3" fill={`rgb(${this.state.r}, 0, ${this.state.b})`} />
                </svg>
            </div>
        )
    }
} 