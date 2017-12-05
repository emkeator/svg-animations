import React, {Component} from 'react'

export default class Svg extends Component {
    constructor() {
        super();
        this.state = {
            color: "red",
            last: 0
        }
    }

    //In componentDidMount, create a callback for the requestAnimationFrame
    componentDidMount() {

        const animate = (timestamp) => {
            //assign the color change
            const color = this.state.color === 'red' ? 'blue' : 'red';
            const last = timestamp - this.state.last >= 1000 ? timestamp : this.state.last
            if (last !== this.state.last) {
                this.setState({
                    color, last
                })
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
                    This animation tracks the color in state. It draws a plain, 
                    circular SVG, and changes the color/stroke based on state. 
                    It has a condition for time so that the changes occur
                    every second, not every animation frame.
                    For this code, look for the file <a target="_blank" href="https://github.com/emkeator/svg-animations">/src/Svg.js</a>.
                </p>
                
                <svg height="100" width="100" ref="mySVG">
                    <circle ref="circleSVG" cx="50" cy="50" r="40" stroke={this.state.color} strokeWidth="3" fill={this.state.color} />
                </svg>
            </div>
        )
    }
} 