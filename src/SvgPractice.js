import React, {Component} from 'react'


export default class SvgPractice extends Component {
    constructor() {
        super();
        this.state = {
            fx: 0,
            fy: 0,
            speed: 5,
            last: 0,
            x1: 0,
            y1: 0,
            x2: 100,
            y2: 0,
            linearX1: 0,
            linearY1: 0
            
        }
    }

    //In componentDidMount, create a callback for the requestAnimationFrame

    componentDidMount() {
        //TO SHOW:
        //Uncomment below; comment out the rect linear and comment in rect radial
        //Comment out the mouseOver mouseLeave functions


        // const animateRadial = (timestamp) => {
        //     if (timestamp - this.state.last >= 0){
        //         let {fx, fy, speed} = this.state
        //         if (fx <= 0 && fy < 100){
        //             // fx = fx //stay at 0%
        //             fy = fy + speed
        //         } else if (fy >= 100 && fx < 100 ) {
        //             fx = fx + speed
        //             //fy = fy //stay at 100%
        //         } else if (fx >= 100 && fy > 0) {
        //             //fx = fx //stay at 100%
        //             fy = fy - speed
        //         } else if (fy <= 0 && fx > 0) {
        //             fx = fx - speed
        //             //fy = fy //stay at 0%
        //         }
        //         console.log(fx, fy)
        //         let last = timestamp
        //         this.setState({
        //             fx, fy, last
        //         })
        //     }
        //     this.rafId = requestAnimationFrame(animateRadial);
            
        // };

        // this.rafId = requestAnimationFrame(animateRadial);
 
    }

    
    componentWillUnmount() {
        // cancelAnimationFrame(this.rafId);
        // cancelAnimationFrame(this.rafId2);
        cancelAnimationFrame(this.rafIdText);
    }

    animateMouseOver(){
        cancelAnimationFrame(this.rafIdLeave);        
        const animate = (timestamp) => {
            let {linearX1, linearY1} = this.state
            if(linearX1 <= 400) {
                linearX1 += 4
                linearY1 += 4
            }
            this.setState({
                linearX1,
                linearY1
            })
            this.rafIdOver = requestAnimationFrame(animate);
            if(linearX1 > 400){
                linearX1 = 1600
                linearY1 = 1600
                this.setState({
                    linearX1,
                    linearY1
                })
                cancelAnimationFrame(this.rafIdOver);
            }
        }
        this.rafIdOver = requestAnimationFrame(animate);
    }

    animateMouseLeave(){
        cancelAnimationFrame(this.rafIdOver);
        const animate = (timestamp) => {
            let {linearX1, linearY1} = this.state
            if(linearX1 > 200){
                linearX1 = 200
                linearY1 = 200
            }
            if(linearX1 <= 200) {
                linearX1 -= 6
                linearY1 -= 6
                if (linearX1 <= 0){
                    linearX1 = 0
                    linearY1 = 0
                }
            } 
            
            this.setState({
                linearX1,
                linearY1
            })

            this.rafIdLeave = requestAnimationFrame(animate);
            if (linearX1 === 0){
                cancelAnimationFrame(this.rafIdLeave);
            }
            
        }
        this.rafIdLeave = requestAnimationFrame(animate);
    }

    render(){
        return (
            <div style={{position: 'relative', margin: '50px 0'}} className="plainSVGDiv">
                <p>
                    This is a nice SVG login button, which works with onMouseOver 
                    and onMouseLeave JSX event listeners to add a border when
                    the user hovers over the button.

                </p>
                <svg height="100" width="200" onMouseOver={() => this.animateMouseOver()} onMouseLeave={() => this.animateMouseLeave()}>
                    <defs>
                        <linearGradient id="linear" x1={`${this.state.linearX1}%`} y1={`${this.state.linearY1}%`} x2={`${0}%`} y2={`${0}%`}> 
                            <stop offset="0%"   stopColor="#000"/>
                            <stop offset="100%" stopColor="#fff"/>
                        </linearGradient>
                        <linearGradient id="linear2" x1="0%" y1="0%" x2="100%" y2="0%"> 
                            <stop offset={`0%`}   stopColor="#000"/>
                            <stop offset={`0%`} stopColor="#fff"/>
                        </linearGradient>
                        <radialGradient id="circular" fx={`${this.state.fx}%`} fy={`${this.state.fy}%`}>
                            <stop offset="10%" stopColor="gold"/>
                            <stop offset="95%" stopColor="black"/>
                        </radialGradient>
                    </defs>
                    <rect fill="black" height="100" width="200" rx="10" ry="10"/>
                     {/* <rect fill="none" height="80" width="180" 
                          x={`${(200 - 180) / 2}`} y={`${(200 - 80) / 2}`} 
                          rx="10" ry="10" stroke="url(#circular)" strokeWidth="5"
                          />  */}
                    <rect fill="none" height="80" width="180" 
                        x={`${(200 - 180) / 2}`} y={`${(100 - 80) / 2}`} 
                        rx="10" ry="10" stroke="url(#linear)" strokeWidth="3"
                        /> 
                    <text x={`${(200 / 2) - 30}`} y={`${(100 / 2) + 5}`} style={{fill: 'url(#linear2)', letterSpacing: '0.2em'}}>LOGIN</text>
                </svg>
                
            </div>
        )
    }
} 