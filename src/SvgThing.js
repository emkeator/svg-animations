import React, {Component} from 'react'
import lapis from './lapisLazuli.jpg'

/* EXAMPLE ADAPTED FROM https://www.aaron-powell.com/demos/react-svg/react-svg-example/ */
export default class SvgThing extends Component {
        constructor(props) {
            super(props);

            this.state = {
                //Theta is the angle to rotate
                currentTheta: 0,
                starPoints: "400,133 447,320 633,333 467,400 533,567 400,453 267,567 333,400 167,333 360,320",
                starPointsTranslated: "0,-267 47,-80 233,-67 67,0 133,167 0,53 -133,167 -67,0 -233,-67 -40,-80",
                starPoints2: "400,200 420,380 600,400 420,420 400,600 380,420 200,400 380,380",
                starPointsTranslated2: "0,-200 20,-20 200,0 20,20 0,200 -20,20 -200,0 -20,-20"
            };
        }

        componentDidMount() {
            //In componentDidMount, create a callback for the requestAnimationFrame
            const animate = () => {

                const nextTheta = this.state.currentTheta > this.props.angularLimit ? 0 : this.state.currentTheta + this.props.thetaDelta;
                this.setState({ currentTheta: nextTheta });
                this.rafId = requestAnimationFrame(animate);
            };

            this.rafId = requestAnimationFrame(animate);
        }

        componentWillUnmount() {
            cancelAnimationFrame(this.rafId);
        }

        render() {
            return (
                    <div className="compassRose">
                        <div className="pContainer">
                            <p>This is a slightly more complicated animation - it creates a compass rose-like design that turns and rotates!</p>
                        </div>
                        <svg width="800px" height="800px" viewBox="0 0 800 800" style={{backgroundColor: '#00051e', borderRadius: '50%', border: '5px solid rgb(203,155,81)'}}>
                            <defs>
                                  <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="5%" stopColor="rgb(70,37,35)"/>
                                    <stop offset="20%" stopColor="rgb(203,155,81)"/>
                                    <stop offset="30%" stopColor="rgb(246,226,122)"/>

                                    <stop offset="50%" stopColor="rgb(246,242,193)"/>

                                    <stop offset="70%" stopColor="rgb(246,226,122)"/>
                                    <stop offset="80%" stopColor="rgb(203,155,81)"/>
                                    <stop offset="95%" stopColor="rgb(70,37,35)"/>
                                </linearGradient>  

                                <radialGradient id="radial1">
                                    <stop offset="10%" stopColor="rgb(246,242,193)"/>
                                    <stop offset="20%" stopColor="rgb(246,226,122)"/>
                                    <stop offset="50%" stopColor="rgb(203,155,81)"/>
                                    <stop offset="80%" stopColor="rgb(70,37,35)"/>
                                </radialGradient>
                                <radialGradient id="radial2">
                                    <stop offset="50%" stopColor="rgb(124, 87, 84)"/>
                                    <stop offset="70%" stopColor="rgb(203,155,81)"/>
                                    <stop offset="90%" stopColor="rgb(246,226,122)"/>
                                    <stop offset="99%" stopColor="rgb(246,242,193)"/>
                                </radialGradient>
                                <radialGradient id="radial3">
                                    <stop offset="50%" stopColor="rgb(0, 0, 0)"/>
                                    <stop offset="75%" stopColor="rgba(0, 0, 0, 0.5)"/>                            
                                    <stop offset="100%" stopColor="rgba(0, 0, 0, 0.1)"/>
                                </radialGradient>
                                <radialGradient id="radial4">
                                    <stop offset="93%" stopColor="rgb(124, 87, 84)"/>
                                    <stop offset="95%" stopColor="rgb(203,155,81)"/>
                                    <stop offset="97%" stopColor="rgb(246,226,122)"/>
                                    <stop offset="99%" stopColor="rgb(246,242,193)"/>
                                </radialGradient>
                            </defs>
                            <g transform="translate(400, 400)"> 
                                <rect x="-200" y="-200" width="400" height="400" rx="5" ry="5" 
                                        style={{ stroke: 'url(#goldLinear)', strokeWidth: 10, fill: 'none'}}
                                        transform={`rotate(${this.state.currentTheta})`} />
                                <rect x="-200" y="-200" width="400" height="400" rx="5" ry="5" 
                                        style={{ stroke: 'url(#goldLinear)', strokeWidth: 10, fill: 'none'}}
                                        transform={`rotate(${this.state.currentTheta + 45})`} />
                                <rect x="-125" y="-125" width="250" height="250" rx="5" ry="5" 
                                        style={{ fill: 'url(#goldLinear)'}}
                                        transform={`rotate(${this.state.currentTheta})`} />
                                <image x="-125" y="-125" width="250" height="250" xlinkHref={lapis} 
                                        style={{ stroke: 'url(#radial3)', strokeWidth: '3'}}
                                        transform={`rotate(${this.state.currentTheta + 45})`}/>
                                <circle r="100" 
                                        style={{ fill: 'url(#radial2)'}}
                                        transform={`rotate(${this.state.currentTheta})`} />
                                <polygon points={`${this.state.starPointsTranslated2}`}
                                        style={{ fill: 'url(#radial1)'}}
                                        transform={`rotate(${this.state.currentTheta})`}/>
                                <polygon points={`${this.state.starPointsTranslated2}`}
                                        style={{ fill: 'url(#radial1)'}}
                                        transform={`rotate(${this.state.currentTheta + 45})`}/>
                            </g>
                            <text x={`${400 - 33}`} y={`${100}`} style={{fill: 'url(#radial1)', fontFamily: 'cursive', fontSize: '3.5rem'}}>N</text>
                            <text x={`${400 - 20}`} y={`${750}`} style={{fill: 'url(#radial1)', fontFamily: 'cursive', fontSize: '3.5rem'}}>S</text>
                            <text x={`${50}`} y={`${400 + 25}`} style={{fill: 'url(#radial1)', fontFamily: 'cursive', fontSize: '3.5rem'}}>E</text>
                            <text x={`${700}`} y={`${400 + 25}`} style={{fill: 'url(#radial1)', fontFamily: 'cursive', fontSize: '3.5rem'}}>W</text> 
                        </svg>
                    </div>
            );
        }
    }