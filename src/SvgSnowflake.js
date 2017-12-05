import React, {Component} from 'react'
import lodash from 'lodash'
import snowflakes from './snowflakes.jpg'

//See render function, first SVG, for explanation of the intermediate shapes
export default class SvgSnowflake extends Component {
        constructor(props) {
            super(props);

            this.state = {
                flake1: {
                    a: {
                        scale: 0.4,
                        rotate: -15
                    },
                    b: {
                        scale: 0.2,
                        rotate: -15
                    }
                },
                flake2: {
                    a: {
                        scale: 0.4,
                        rotate: 60
                    },
                    b: {
                        scale: 0.6,
                        rotate: 30
                    }
                },
                flake3: {
                    a: {
                        scale: 0.5,
                        rotate: 0
                    },
                    b: {
                        scale: 0.3,
                        rotate: 30
                    }
                },
                count: 0,
                currentPath: [68.58111,148.1519,0.757679,-0.45336,0.808046,-0.35036,0.845142,-0.24163,0.86836,-0.12891,0.877324,-0.0141,0.871879,0.10097,0.852117,0.21437,0.818364,0.32426,0.771176,0.4288,0.711322,0.52633,0.639788,0.61519,0.557753,0.69397,0.466555,0.76134,0.367697,0.81622,0.262805,0.85769,0.153594,0.88508,0.04186,0.89794,-0.07056,0.89605,-0.181819,0.87945,-0.290092,0.84841,-0.393608,0.80343,-0.490653,0.74527,-0.579647,0.67487,-0.659119,0.59339,-0.727774,0.50216,-0.784474,0.40269,-0.828296,0.29661,-0.858515,0.18565,-0.874641,0.0716,-0.8764,-0.0435,-1.271647,-0.20898,-0.862454,-0.34634,-1.044631,-0.5973,-0.738128,-0.70303,-0.600004,-0.65593,-0.513207,-0.72915,-0.417986,-0.79041,-0.315899,-0.83867,-0.20863,-0.87318,-0.09793,-0.89335,0.01437,-0.89884,0.126449,-0.88958,0.23644,-0.8657,0.342553,-0.82762,0.44304,-0.77595,0.536252,-0.71154,0.536252,-0.71154],
                deltaCircleToFlake: [-0.004839339999999907,-0.013815700000000106,-0.0073904899999999996,-0.21834530000000002,-0.008740460000000002,-0.027249400000000003,-0.00881122,-0.029031599999999998,0.03541165,-0.1260588,0.03431482,0.1290185,-0.00670427,0.029840900000000004,-0.00900617,0.0302263,-0.00953955,0.217087,0.16757327,-0.13003420000000002,0.01974602,-0.0219857,0.01730481,-0.019437799999999998,0.11814813000000002,-0.055134100000000005,-0.08573934999999999,0.10281189999999998,-0.02213377,0.008300400000000001,-0.024376330000000005,0.012601500000000003,-0.17969648,0.1175509,0.16595804,0.1065171,0.02565798,0.011038300000000001,0.02530099,0.008425300000000002,0.08752851999999998,0.1060586,-0.12351841000000001,-0.0466102,-0.01878126,-0.025559699999999998,-0.021500179999999997,-0.0263701,-0.16454253,-0.1263683,0.00812384,0.2199306,0.00794724,0.029490299999999997,0.006650940000000001,0.0272472,-0.03399301,0.1319831,-0.034328920000000006,-0.1391443,0.008311599999999999,-0.028671000000000002,0.01163931,-0.029985300000000003,0.009967940000000002,-0.2194495,-0.16118483000000003,0.1294663,-0.028232740000000003,0.0268268,-0.01751278,0.019480300000000002,-0.11800874,0.0362829,0.08447885000000001,-0.0894937,0.023670209999999997,-0.0089205,0.03153974,-0.0106698,0.17448128000000002,-0.1126812,-0.16905709,-0.1105528,-0.0302381,-0.012795199999999998,-0.02488498,-0.007802999999999999,-0.08389947000000002,-0.10417350000000002,0.12634309999999999,0.054511899999999995,0.017815380000000002,0.022338200000000002,0.017815380000000002,0.022338200000000002],
                deltaFlakeToFullFlake: [0,0,0,0,-0.06921859000000001,-0.07354490000000001,0.06921868,0.07354490000000001,-1.000000000139778e-8,-9.999999999621423e-8,0,9.999999999621423e-8,0.07210276,-0.0692188,-0.07210275000000001,0.0692188,0,0,-2.0000000020559128e-8,0,0.032629979999999996,-0.1019687,-0.03262997,0.10196870000000001,1.9999999985031992e-8,0,0,0,0.0968702,0.012236200000000003,-0.09687021,-0.012236200000000003,-9.999999974752428e-9,0,0,0,0.10706712,-0.016315000000000003,-0.10706710000000001,0.016314999999999996,0,-9.999999999621423e-8,-9.999999992515996e-9,0,0.02447249,0.0958507,-0.024472490000000003,-0.0958507,-1.0000000010279564e-8,9.999999999621423e-8,0,0,0.07239777,0.07035829999999998,-0.07239778000000001,-0.0703584,0,0,-1.000000000139778e-8,9.999999999621423e-8,-0.07443712000000001,0.0723977,0.07443715000000001,-0.07239780000000001,0,9.999999999621423e-8,1.0000000010279564e-8,0,-0.022433109999999996,0.09789,0.02243311,-0.09789,-4.000000000559112e-8,0,0,-9.999999999621423e-8,-0.09687027000000001,-0.0132559,0.09687027,0.013256000000000002,-9.999999974752428e-9,0,9.999999974752428e-9,-9.999999999621423e-8,-0.09687027000000001,0.015295399999999999,0.09687027000000001,-0.015295300000000003,0,0,0,0,-0.0234528,-0.10094900000000001,0.026216899999999998,0.10093410000000001]
            };
        }

        componentDidMount() {

            // Each of the snowflakes you see is made of up of 
            // two snowflakes, overlaid over each other with 
            // positioning. I used repl.it to create a function
            // that took the path strings (d attribute) and 
            // calculated 0.01 of the difference between the circle
            // and the first flake, then the first flake and the full
            // flake. I then took those values and made them the delta
            // arrays in state. To animate the growth, I started each svg
            // with the circle path, and for 100 iterations of 
            // requestAnimationFrame I add the delta change for each
            // path node to become the flake, and then for the next 100
            // I did the same but with the delta change from flake to full
            // flake.

            const animate = () => {
                
                let {deltaCircleToFlake, deltaFlakeToFullFlake, currentPath, count} = this.state
                if(count < 100) {
                    //delta change towards the first flake
                    currentPath = currentPath.map((e, i) => {
                        return e + deltaCircleToFlake[i]
                    })
                    count++
                    this.setState({
                        currentPath, count
                    })
                    //recursive call
                    this.rafId = requestAnimationFrame(animate);
                } else if (count >= 100 && count < 200){
                    //delta change towards the full flake
                    currentPath = currentPath.map((e, i) => {
                        return e + deltaFlakeToFullFlake[i]
                    })
                    count++
                    this.setState({
                        currentPath, count
                    })
                    
                    //recursive call
                    this.rafId = requestAnimationFrame(animate);
                } else {
                    //cancel frame
                    cancelAnimationFrame(this.rafId);
                }
                
                
                
            };

            this.rafId = requestAnimationFrame(animate);
        }

        componentWillUnmount() {
            cancelAnimationFrame(this.rafId);
        }

        
        overFlake(ref) {
            this.intervalID = setInterval(() => {
                let flake = Object.assign(this.state)
                flake[ref].a.rotate += ref === 'flake2' ? -0.5 : 0.5
                flake[ref].b.rotate += ref === 'flake2' ? -0.5 : 0.5
                this.setState(flake)
            }, 50)
        }

        outOfFlake(ref){
            clearInterval(this.intervalID)
        }

        render() {
            return (
                <div className="compassRose">
                    <div className="pContainer">
                        <p>This is another more complicated animation - the path is changed 
                            using math to make to snowflakes grow out of circles. More 
                            intermediate shapes could have been added as well, so long as the 
                            number of nodes stayed consistent. Note: the way this is set up to 
                            change the path, which is stored as an array in state, can get expensive!
                            A few of the snowflakes rotate, using a set interval, upon clicking.
                            For this code, look for the file <a target="_blank" href="https://github.com/emkeator/svg-animations">/src/SvgSnowflake.js</a>.
                        </p>
                    </div>
                    <div style={{position: 'relative', width: '80vw', height: '500px', border:'3px solid white', margin: '0 auto', backgroundImage:`url(${snowflakes})`}}>
                        
                        <svg ref='flake1' onClick={() => alert('Link to something! Show a div! Whatever!')} onMouseEnter={() => this.overFlake('flake1')} onMouseLeave={() => this.outOfFlake('flake1')} width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{cursor: 'pointer', zIndex:5, position: 'absolute', top: -50, left: 50}} transform={`scale(${this.state.flake1.a.scale}) rotate(${this.state.flake1.a.rotate})`}>
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                                {/* 

                                ////
                                For reference: these are the intermediate shapes.
                                
                                <path 
                                    style={{fill: 'none', stroke: 'white', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d="m 68.097176,146.77033 0.01863,-22.28789 -6.987859,-10.42979 6.885888,4.2097 4.409524,-12.7348 4.308806,12.88776 7.411728,-3.83682 -7.258775,10.15888 -0.135591,22.03296 17.528501,-12.57462 5.948922,-11.86911 -0.892728,8.86828 12.372568,-4.81944 -8.10738,11.04253 7.84134,2.86988 -11.861849,0.89422 -17.816055,12.64017 16.637664,11.54965 13.20195,0.36838 -8.35843,3.35348 8.46276,11.45426 -12.74545,-3.85759 0.07847,7.77437 -5.176914,-11.54721 -17.113373,-12.04343 0.08461,22.49522 7.250027,10.38755 -7.40298,-4.01451 -4.257816,13.38396 -4.307534,-13.84282 -7.488952,4.32917 7.335999,-10.44729 0.13434,-22.29128 -17.163113,12.34933 -5.804713,11.76865 -0.107971,-8.4969 -12.314085,2.89914 8.029899,-9.73979 -7.635905,-3.05631 12.632371,-0.61456 17.350197,-12.16147 -16.891338,-11.95413 -12.584388,-0.63956 7.434969,-3.17553 -8.047394,-11.24497 13.07735,4.67524 -0.02749,-8.57262 4.93948,11.61569 z"
                                    id="fullFlake"
                                />
                                <path
                                    style={{fill: 'none', stroke: 'red', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d="m 68.58111,148.1519 0.757679,-0.45336 0.808046,-0.35036 0.845142,-0.24163 0.86836,-0.12891 0.877324,-0.0141 0.871879,0.10097 0.852117,0.21437 0.818364,0.32426 0.771176,0.4288 0.711322,0.52633 0.639788,0.61519 0.557753,0.69397 0.466555,0.76134 0.367697,0.81622 0.262805,0.85769 0.153594,0.88508 0.04186,0.89794 -0.07056,0.89605 -0.181819,0.87945 -0.290092,0.84841 -0.393608,0.80343 -0.490653,0.74527 -0.579647,0.67487 -0.659119,0.59339 -0.727774,0.50216 -0.784474,0.40269 -0.828296,0.29661 -0.858515,0.18565 -0.874641,0.0716 -0.8764,-0.0435 -1.271647,-0.20898 -0.862454,-0.34634 -1.044631,-0.5973 -0.738128,-0.70303 -0.600004,-0.65593 -0.513207,-0.72915 -0.417986,-0.79041 -0.315899,-0.83867 -0.20863,-0.87318 -0.09793,-0.89335 0.01437,-0.89884 0.126449,-0.88958 0.23644,-0.8657 0.342553,-0.82762 0.44304,-0.77595 0.536252,-0.71154 0.62066,-0.63543 z"
                                    id="circle" 
                                    
                                />
                                <path
                                    style={{fill: 'none', stroke: 'blue', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d="m 68.097176,146.77033 0.01863,-22.28789 -0.066,-3.0753 -0.03598,-3.14479 4.409525,-12.73479 4.308806,12.88775 0.201452,3.08506 -0.0485,3.237 -0.135591,22.03296 17.528503,-12.57462 2.685924,-1.67224 2.370269,-1.32859 12.372566,-4.81944 -8.10738,11.04253 -1.84568,1.64626 -2.174828,2.11784 -17.816054,12.64017 16.637664,11.54965 2.495238,1.99988 2.34828,1.72198 8.46276,11.45427 -12.745449,-3.85759 -2.368779,-1.8107 -2.729665,-1.96214 -17.113372,-12.04344 0.08461,22.49522 0.01025,3.35172 -0.163202,3.02133 -4.257816,13.38396 -4.307533,-13.84283 -0.04524,-2.9106 -0.107716,-3.20751 0.13434,-22.29129 -17.163114,12.34933 -3.561402,1.97965 -2.351282,1.2921 -12.314081,2.89914 8.029899,-9.73978 2.051122,-1.73072 2.945344,-1.94016 17.350198,-12.16147 -16.891339,-11.95412 -2.897361,-2.1691 -2.252058,-1.646 -8.047394,-11.24497 13.07735,4.67524 2.31779,1.52228 z"
                                    id="flake"
                                /> */}
                            </g>
                        </svg>
                        <svg ref='flake1' onClick={() => alert('Link to something! Show a div! Whatever!')} onMouseEnter={() => this.overFlake('flake1')} onMouseLeave={() => this.outOfFlake('flake1')} width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{cursor: 'pointer', zIndex:5, position: 'absolute', top: -50, left: 50}} transform={`scale(${this.state.flake1.b.scale}) rotate(${this.state.flake1.b.rotate})`}>
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>

                        <svg width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{zIndex:5, position: 'absolute', top: 150, left: 50}} transform="scale(0.2)">
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>
                        <svg width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{zIndex:5, position: 'absolute', top: 150, left: 50}} transform="scale(0.4) rotate(30)">
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>

                        <svg ref="flake2" onClick={() => alert('Link to something! Show a div! Whatever!')} onMouseEnter={() => this.overFlake('flake2')} onMouseLeave={() => this.outOfFlake('flake2')}width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{cursor: 'pointer', zIndex:5, position: 'absolute', top: 50, left: '25vw'}} transform={`scale(${this.state.flake2.a.scale}) rotate(${this.state.flake2.a.rotate})`}>
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>
                        <svg ref="flake2" onClick={() => alert('Link to something! Show a div! Whatever!')} onMouseEnter={() => this.overFlake('flake2')} onMouseLeave={() => this.outOfFlake('flake2')} width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{cursor: 'pointer', zIndex:5, position: 'absolute', top: 50, left: '25vw'}} transform={`scale(${this.state.flake2.b.scale}) rotate(${this.state.flake2.b.rotate})`}>
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>

                        <svg ref="flake3" onClick={() => alert('Link to something! Show a div! Whatever!')} onMouseEnter={() => this.overFlake('flake3')} onMouseLeave={() => this.outOfFlake('flake3')} width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{cursor: 'pointer', zIndex:5, position: 'absolute', right: 20, top: 0}} transform={`scale(${this.state.flake3.a.scale}) rotate(${this.state.flake3.a.rotate})`}>
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>
                        <svg ref="flake3" onClick={() => alert('Link to something! Show a div! Whatever!')} onMouseEnter={() => this.overFlake('flake3')} onMouseLeave={() => this.outOfFlake('flake3')} width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{cursor: 'pointer', zIndex:5, position: 'absolute', right: 20, top: 0}} transform={`scale(${this.state.flake3.b.scale}) rotate(${this.state.flake3.b.rotate})`}>
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>

                        <svg width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{zIndex:5, position: 'absolute', top: 200, left: 420}} transform="scale(0.2)">
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>
                        <svg width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{zIndex:5, position: 'absolute', top: 200, left: 420}} transform="scale(0.18) rotate(-30)">
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>

                        <svg width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{zIndex:5, position: 'absolute', top: -50, left: -70}} transform="scale(0.2)">
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>
                        <svg width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{zIndex:5, position: 'absolute', top: -50, left: -70}} transform="scale(0.18) rotate(-30)">
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>

                        <svg width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{zIndex:5, position: 'absolute', top: 250, left: 600}} transform="scale(0.2) rotate(80)">
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>
                        <svg width="79.727089mm" height="98.450249mm" viewBox="0 0 79.727089 98.450249" id="svg8" style={{zIndex:5, position: 'absolute', top: 250, left: 600}} transform="scale(0.1) rotate(80)">
                            <g id="layer1" transform="translate(-32.355543,-105.1169)">
                                <path 
                                    style={{fill: 'rgba(255, 255, 255, 0.6)', stroke: 'rgba(117, 185, 249, 0.5)', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1}}
                                    d={`m ${lodash.chunk(this.state.currentPath, 2).join(' ')} z`}
                                    id="fullFlake"
                                />
                            </g>
                        </svg>

                        
                    </div>
                    
                </div>
            );
        }
    }