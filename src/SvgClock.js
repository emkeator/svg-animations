import React, {Component} from 'react'

export default class SvgClock extends Component {
        constructor(props) {
            super(props);

            this.state = {
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

            //Set it to the current time!
            let time = new Date()
            //If you want your own timezone:
            //Change to .getHours, .getMinutes, .getSeconds
            let hour = time.getUTCHours()
            hour = hour >= 12 ? hour - 12 : hour
            let minute = time.getUTCMinutes() 
            let second = time.getUTCSeconds()

            this.setState({
                currentHrTheta: hour * 30,
                currentMinTheta: minute * 6,
                currentSecTheta: second * this.state.thetaDeltaSec
            })

            //Make the clock tick
            setInterval(() => {
                const nextSecTheta = this.state.currentSecTheta >= this.props.angularLimit ? 6 : this.state.currentSecTheta + this.state.thetaDeltaSec;
                const nextMinTheta = this.state.currentMinTheta >= this.props.angularLimit ? 0.1 : this.state.currentMinTheta + this.state.thetaDeltaMin;
                this.setState({ currentSecTheta: nextSecTheta, currentMinTheta: nextMinTheta });
            }, 1000)

            setInterval(() => {
                const nextHrTheta = this.state.currentHrTheta > this.props.angularLimit ? 0 : this.state.currentHrTheta + this.state.thetaDeltaHr;
                this.setState({ currentHrTheta: nextHrTheta });
            }, 1000 * 60 * 60)

        }

        render() {
            return (
                <div className="compassRose">
                    <div className="pContainer">
                        <p>This is another more complicated animation - it makes some calculations
                            to create a clock that tracks the minutes/hours/seconds! This one works on 
                            setInterval, rather than requestAnimationFrame, because while setInterval
                            will run at the given interval (1 sec in this case) as long as the component 
                            is mounted, requestAnimationFrame will stop animating while the page is not 
                            being viewed! setInterval keeps the clock running and accurate. Note: because I 
                            am mildly obsessed with British history, I set this clock up to run on 
                            Greenwich Mean time; unless you find yourself in London,
                            this clock won't give you accurate time!
                            For this code, look for the file <a target="_blank" href="https://github.com/emkeator/svg-animations">/src/SvgClock.js</a>.</p>
                        <p style={{fontFamily: 'cursive', fontSize: '2rem', border: 'none', background: '-webkit-linear-gradient(right, rgb(70,37,35), rgb(203,155,81), rgb(246,226,122), rgb(246,242,193), rgb(246,226,122), rgb(203,155,81), rgb(70,37,35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Greenwich Mean Time Clock</p>
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