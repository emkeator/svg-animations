import React, {Component} from 'react'
import clockOuter from './zodiac_clock_outer.png'
import clockInner from './zodiac_clock_inner.png'

export default class SvgClock extends Component {
        constructor(props) {
            super(props);

            this.state = {
                //Theta is the angle to rotate
                //Theta Delta is calculated to be the degrees the clock should rotate per second.
                currentSecTheta: 0,
                currentHrTheta: 0,                
                currentMinTheta: 0,
                thetaDeltaSec: 6, //second
                thetaDeltaMin: 6 / 60, //minute
                thetaDeltaHr: 360 / 12, //hour 
                lastSec: 0,
                lastMin: 0,
                lastHr: 0,

            };
        }

        componentDidMount() {
            //In componentDidMount, create a callback for the requestAnimationFrame
            const animate = (timestamp) => {
                //360 degrees
                //24 hours = 360 degrees
                //12 hours = 180 degrees
                //1 hour = 180 / 12
                //1 minute = (180 / 12) / 60
                //1 second = ((180 / 12) / 60) / 60

                //only go if 1 second has passed!
                // console.log(this.state.currentMinTheta)
                if(timestamp - this.state.lastSec >= 1000){
                    const nextSecTheta = this.state.currentSecTheta >= this.props.angularLimit ? 6 : this.state.currentSecTheta + this.state.thetaDeltaSec;
                    // console.log(nextSecTheta)
                    const nextMinTheta = this.state.currentMinTheta >= this.props.angularLimit ? 0.1 : this.state.currentMinTheta + this.state.thetaDeltaMin;
                    
                    this.setState({ currentSecTheta: nextSecTheta, 
                                    lastSec: timestamp,
                                    currentMinTheta: nextMinTheta,
                                    lastMin: timestamp });
                }

                if(timestamp - this.state.lastMin >= 1000 * 60){
                    const nextMinTheta = this.state.currentMinTheta > this.props.angularLimit ? 0 : this.state.currentMinTheta + this.state.thetaDeltaMin;
                    this.setState({ currentMinTheta: nextMinTheta,
                                    lastMin: timestamp });
                }

                // if(timestamp - this.state.lastHr >= 1000 * 60 * 60){
                //     const nextHrTheta = this.state.currentHrTheta > this.props.angularLimit ? 0 : this.state.currentHrTheta + this.state.thetaDeltaHr;
                //     this.setState({ currentHrTheta: nextHrTheta,
                //                     lastHr: timestamp });
                // }


                
                //recursive call
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
                        <p>This is another more complicated animation - it makes some calculations
                            to create a working clock!</p>
                    </div>

                    <svg width="800px" height="800px" viewBox="0 0 800 800" >
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
                            <linearGradient id="blueLinear" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="10%" stopColor="#001538"/>
                                <stop offset="20%" stopColor="#0e254c"/>
                                <stop offset="30%" stopColor="#274372"/>

                                <stop offset="50%" stopColor="#a1b9e2"/>

                                <stop offset="70%" stopColor="#274372"/>
                                <stop offset="80%" stopColor="#0e254c"/>
                                <stop offset="90%" stopColor="#001538"/>
                            </linearGradient>
                            <linearGradient id="creamLinear" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="10%" stopColor="#fff2cc"/>
                                <stop offset="20%" stopColor="#fff6db"/>
                                <stop offset="30%" stopColor="#fffbf0"/>

                                <stop offset="50%" stopColor="#fffefa"/>

                                <stop offset="70%" stopColor="#fffbf0"/>
                                <stop offset="80%" stopColor="#fff6db"/>
                                <stop offset="90%" stopColor="#fff2cc"/>
                            </linearGradient>
                        </defs>
                        <g transform="translate(400, 400)"> 
                            <circle r="375" style={{fill:"url(#blueLinear)", stroke:"url(#goldLinear)", strokeWidth:"3"}}
                                            transform={`rotate(${45 / 4})`}/>
                            <rect x="-265" y="-265" width="530" height="530" rx="5" ry="5" 
                                        style={{ stroke: 'url(#goldLinear)', strokeWidth: 3, fill: 'none'}}
                                        transform={`rotate(${0})`} />
                            <rect x="-265" y="-265" width="530" height="530" rx="5" ry="5" 
                                        style={{ stroke: 'url(#goldLinear)', strokeWidth: 3, fill: 'none'}}
                                        transform={`rotate(${45 / 4})`} />
                            <rect x="-265" y="-265" width="530" height="530" rx="5" ry="5" 
                                        style={{ stroke: 'url(#goldLinear)', strokeWidth: 3, fill: 'none'}}
                                        transform={`rotate(${45 / 2})`} />
                            <rect x="-265" y="-265" width="530" height="530" rx="5" ry="5" 
                                        style={{ stroke: 'url(#goldLinear)', strokeWidth: 3, fill: 'none'}}
                                        transform={`rotate(${(45 / 2) + (45 / 4)})`} />
                            <rect x="-265" y="-265" width="530" height="530" rx="5" ry="5" 
                                        style={{ stroke: 'url(#goldLinear)', strokeWidth: 3, fill: 'none'}}
                                        transform={`rotate(${45})`} />
                            <rect x="-265" y="-265" width="530" height="530" rx="5" ry="5" 
                                        style={{ stroke: 'url(#goldLinear)', strokeWidth: 3, fill: 'none'}}
                                        transform={`rotate(${45 + (45 / 4)})`} />
                            <rect x="-265" y="-265" width="530" height="530" rx="5" ry="5" 
                                        style={{ stroke: 'url(#goldLinear)', strokeWidth: 3, fill: 'none'}}
                                        transform={`rotate(${45 + (45 / 2)})`} />
                            <rect x="-265" y="-265" width="530" height="530" rx="5" ry="5" 
                                        style={{ stroke: 'url(#goldLinear)', strokeWidth: 3, fill: 'none'}}
                                        transform={`rotate(${45 + (45 / 2) + (45 / 4)})`} />
                            <circle r="265" style={{fill:"url(#creamLinear)", stroke:"url(#goldLinear)", strokeWidth:"3"}}
                                            transform={`rotate(${45 / 4})`}/>
                            <circle r="180" style={{fill:"none", stroke:"url(#goldLinear)", strokeWidth:"3"}}/>                            

                            <text x={`${-28}`} y={`${-190}`} style={{fill: '#001538', fontSize: '3.5rem'}}>XII</text>
                            <circle r="8" cx={`${110}`} cy={`${-190}`} style={{fill: 'url(#radial1)'}} />
                            <circle r="8" cx={`${190}`} cy={`${-110}`} style={{fill: 'url(#radial1)'}} />
                            <text x={`${200}`} y={`${22}`} style={{fill: '#001538', fontSize: '3.5rem'}}>III</text>
                            <circle r="8" cx={`${190}`} cy={`${110}`} style={{fill: 'url(#radial1)'}} />
                            <circle r="8" cx={`${110}`} cy={`${190}`} style={{fill: 'url(#radial1)'}} />
                            <text x={`${-20}`} y={`${230}`} style={{fill: '#001538', fontSize: '3.5rem'}}>VI</text>
                            <circle r="8" cx={`${-110}`} cy={`${190}`} style={{fill: 'url(#radial1)'}} />
                            <circle r="8" cx={`${-190}`} cy={`${110}`} style={{fill: 'url(#radial1)'}} />
                            <text x={`${-240}`} y={`${22}`} style={{fill: '#001538', fontSize: '3.5rem'}}>IX</text>
                            <circle r="8" cx={`${-190}`} cy={`${-110}`} style={{fill: 'url(#radial1)'}} />
                            <circle r="8" cx={`${-110}`} cy={`${-190}`} style={{fill: 'url(#radial1)'}} />
                            
                            <rect x="0" y="-100" width="1" height="100" rx="5" ry="5" 
                                        style={{ stroke: (this.state.currentHrTheta >= 330 || this.state.currentHrTheta <= 30) || (this.state.currentHrTheta >= 150 && this.state.currentHrTheta <= 210) 
                                        ? 'rgb(246,226,122)' : 
                                        (this.state.currentHrTheta >= 60 && this.state.currentHrTheta <= 120) || (this.state.currentHrTheta >= 240 && this.state.currentHrTheta <= 300) 
                                        ? 'rgb(70,37,35)' : 'rgb(203,155,81)', strokeWidth: 3, fill: 'none'}}
                                        transform={`rotate(${this.state.currentHrTheta})`} />
                            <rect x="0" y="-160" width="2" height="160" rx="5" ry="5" 
                                        style={{ stroke: '#0e254c', strokeWidth: 3, fill: 'none'}}
                                        transform={`rotate(${this.state.currentMinTheta})`} />
                            <rect x="0" y="-190" width="1" height="190" rx="5" ry="5" 
                                        style={{ stroke: (this.state.currentSecTheta >= 330 || this.state.currentSecTheta <= 30) || (this.state.currentSecTheta >= 150 && this.state.currentSecTheta <= 210) 
                                        ? 'rgb(246,226,122)' : 
                                        (this.state.currentSecTheta >= 60 && this.state.currentSecTheta <= 120) || (this.state.currentSecTheta >= 240 && this.state.currentSecTheta <= 300) 
                                        ? 'rgb(70,37,35)' : 'rgb(203,155,81)', strokeWidth: 3, fill: 'none'}}
                                        transform={`rotate(${this.state.currentSecTheta})`} />
                            <circle r="10" style={{fill:"url(#radial1)"}}/>
                        </g>
                    </svg>
                </div>
            );
        }
    }