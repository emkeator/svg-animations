import React, {Component} from 'react'
import lodash from 'lodash'

export default class SvgPath extends Component {
    constructor() {
        super();
        this.state = {
            enterPathOffset: 230,
            enterTPathOffset: 26,
            siteSPathOffset: 100,
            sitePathOffset: 130,
            siteTPathOffset: 26,
            iDot: 34, //down to 40
            last: 0,
            lastTime: 0,
            siteColor: 34, //down to at rgb(0, 0, 0)
            fontColor: 100 //up to 255, 255, 255
        }
    }

    //In componentDidMount, create a callback for the requestAnimationFrame
    componentDidMount() {
        //must create in componentDidMount!
        const animateFont = (timestamp) => {
            // console.log('running')
            let {fontColor, siteColor, lastTime} = this.state
            if (timestamp - this.state.lastTime >= 200){
                lastTime = timestamp
                fontColor = fontColor === 255 ? 255 : fontColor + 5
                siteColor = siteColor <= 0 ? 0 : siteColor - 4
                // iDot = iDot >= 40 ? 40 : iDot - 2
                this.setState({
                    fontColor, siteColor, lastTime
                })
            }
            if (fontColor === 0 && siteColor === 255){
                cancelAnimationFrame(this.rafIdFont)
            }
            this.rafIdFont = requestAnimationFrame(animateFont);
            
        }

        const animateSite = (timestamp) => {
            if (this.state.siteTPathOffset === 0){
                this.setState({
                    siteTPathOffset: 0,
                    last: timestamp
                })
                setTimeout(() => {
                    this.setState({
                        iDot: 255
                    })
                    cancelAnimationFrame(this.rafIdSite)
                    
                }, 350)
            } else if (this.state.sitePathOffset === 0) {
                this.setState({
                    sitePathOffset: 0
                })
                const siteTPathOffset = this.state.siteTPathOffset - 2
                this.setState({
                    siteTPathOffset
                })
                //recursive call - this ensures that this keeps running!
                this.rafIdSite = requestAnimationFrame(animateSite);
            } else if (this.state.siteSPathOffset >= 100 * 2) {
                this.setState({
                    siteSPathSOffset: 100 * 2
                })
                const sitePathOffset = this.state.sitePathOffset - 2
                this.setState({
                    sitePathOffset
                })
                //recursive call - this ensures that this keeps running!
                this.rafIdSite = requestAnimationFrame(animateSite);
            } else {
                const siteSPathOffset = this.state.siteSPathOffset + 2
                // console.log(sitePathOffset)
                this.setState({
                    siteSPathOffset
                })
                //recursive call - this ensures that this keeps running!
                this.rafIdSite = requestAnimationFrame(animateSite);
            }

        };

        const animateEnter = (timestamp) => {
            if (this.state.enterTPathOffset === 0){
                this.setState({
                    enterTPathOffset: 0
                })
                cancelAnimationFrame(this.rafIDEnter)
                this.rafIdSite = requestAnimationFrame(animateSite);
            } else if (this.state.enterPathOffset >= 230 * 2) {
                this.setState({
                    enterPathOffset: 230 * 2
                })
                const enterTPathOffset = this.state.enterTPathOffset - 2
                this.setState({
                    enterTPathOffset
                })
                //recursive call - this ensures that this keeps running!
                this.rafIdEnter = requestAnimationFrame(animateEnter);
            } else {
                const enterPathOffset = this.state.enterPathOffset + 2
                // console.log(enterPathOffset)
                this.setState({
                    enterPathOffset
                })
                //recursive call - this ensures that this keeps running!
                this.rafIdEnter = requestAnimationFrame(animateEnter);
                this.rafIdFont = requestAnimationFrame(animateFont)
                
            }
        };

        //call to START the animation
        this.rafIdEnter = requestAnimationFrame(animateEnter);
        
    }

    //ensure the animation stops if the component dies
    componentWillUnmount() {
        cancelAnimationFrame(this.rafIdEnter);
        cancelAnimationFrame(this.rafIdSite);
        cancelAnimationFrame(this.rafIdFont);
    }

    render(){
        return (
            <div className="plainSVGDiv" style={{backgroundColor: '#222', marginBottom: '0'}}>
                <p style={{width: '80vw', margin: '50px auto', color: 'white', border: '3px solid white'}}>
                    This animation has words drawn out as paths (no fill); each has a 
                    dasharray, and a dasharray offset that is changed in state to "draw" the words.
                    The color is also being animated to smoothly change via state. After the animation
                    is complete, the svg become clickable!
                </p>
                
                <div style={{width: '80vw', margin: '0px auto 50px auto', padding: '20px 0px', backgroundColor: `rgb(${this.state.siteColor}, ${this.state.siteColor}, ${this.state.siteColor})`, border: '1px solid white' }}>
                    <svg
                        onClick={() => alert('Link to something!')}
                        width="55.73167mm"
                        height="67.967751mm"
                        viewBox="0 0 55.73167 67.967751"
                        id="svg1846"
                        style={{cursor: this.state.fontColor === 255 && this.state.siteColor === 0 ? 'pointer' : 'auto'}}
                        >
                        <g id="layer1" transform="translate(-70.729884,-99.480954)">
                            {/*Enter*/}
                            <path
                                style={{fill:'none', stroke: `rgb(${this.state.fontColor}, ${this.state.fontColor}, ${this.state.fontColor})`, strokeWidth:'0.76499999', strokeLinecap:'round', strokeLinejoin:'miter', strokeMiterlimit:'4', strokeOpacity:'1'}}
                                d="m 117.93753,114.21378 c 0.37837,-0.22702 0.75632,-0.45379 0.83843,-0.82205 0.0821,-0.36826 -0.13144,-0.87796 -0.77846,-1.48274 -0.64703,-0.60477 -1.66091,-1.26159 -2.91336,-1.27958 -1.25244,-0.018 -2.61023,0.68959 -2.8944,2.87551 -0.28417,2.18592 0.50508,5.84883 0.7916,7.49002 0.28651,1.64118 0.0186,1.16704 -0.4964,-0.74628 -0.51502,-1.91332 -1.3794,-5.44693 -1.61229,-6.49158 -0.23288,-1.04465 0.16547,0.3986 0.28837,2.2503 0.12291,1.8517 -0.0273,4.07738 -0.77997,5.1899 -0.75272,1.11252 -2.10346,1.04162 -3.40802,0.73612 -1.30456,-0.30549 -2.48594,-0.81255 -3.41321,-1.63768 -0.92727,-0.82513 -1.44619,-1.9017 -1.62763,-2.96115 -0.18144,-1.05945 -0.0397,-2.00403 0.61268,-2.72955 0.6524,-0.72552 1.88943,-1.06695 2.78141,-0.64767 0.89198,0.41929 1.70231,1.62677 1.65124,3.31015 -0.0511,1.68338 -0.85089,4.0128 -1.43693,5.50518 -0.58604,1.49238 -0.95919,2.15004 -1.57769,2.32089 -0.6185,0.17086 -1.56389,-0.17524 -2.35148,-1.15199 -0.78759,-0.97674 -1.58043,-2.64359 -3.515707,-8.32258 -1.93528,-5.67899 -5.012936,-15.36989 -4.999289,-15.747767 0.01365,-0.377877 3.118705,8.557557 4.641669,14.350087 1.522964,5.79253 1.463919,8.44394 1.116469,10.02277 -0.347451,1.57882 -0.983732,2.08728 -1.653742,2.27228 -0.67001,0.18501 -1.373661,0.0465 -1.770236,-0.78714 -0.396576,-0.83364 -0.485645,-2.36197 -1.19319,-3.71956 -0.707545,-1.3576 -2.100911,-2.60493 -3.188503,-2.81994 -1.087592,-0.21501 -2.004639,0.48186 -1.762717,2.96632 0.241922,2.48447 1.64281,6.75623 1.657035,6.80777 0.01423,0.0515 -1.301597,-3.94518 -2.190116,-4.73666 -0.888519,-0.79147 -1.236507,1.96711 -2.574267,4.55482 -1.337761,2.58771 -3.703402,5.04434 -5.6892,5.79997 -1.985797,0.75564 -3.672317,-0.11406 -4.654562,-1.67136 -0.982246,-1.55731 -1.270441,-3.80701 -0.284342,-6.46419 0.986098,-2.65719 3.286087,-5.77537 4.074674,-6.63714 0.788587,-0.86176 0.145353,0.42515 -1.464591,1.42425 -1.609944,0.99909 -4.083525,1.68182 -5.626619,0.11089 -1.543094,-1.57093 -1.959775,-5.55691 -0.600421,-9.03966 1.359354,-3.48275 4.472601,-6.67153 7.292792,-7.5053 2.820191,-0.83378 5.348023,0.68742 6.175805,2.07816 0.827782,1.39074 -0.04369,2.65158 -1.104552,3.32362 -1.060864,0.67203 -2.413213,0.76124 -3.00418,0.59079 -0.590967,-0.17045 -0.631883,-0.66143 -0.66967,-1.11485"
                                id="path1761"
                                strokeDasharray="230" 
                                strokeDashoffset={`${this.state.enterPathOffset}`}
                            /> 
                            {/*Enter's t*/}
                            <path
                                style={{fill:'none', stroke: `rgb(${this.state.fontColor}, ${this.state.fontColor}, ${this.state.fontColor})`, strokeWidth:'0.76499999', strokeLinecap:'round', strokeLinejoin:'miter', strokeMiterlimit:'4', strokeOpacity:'1'}}
                                d="m 89.73621,112.5421 c 6.86714,-3.04298 13.73393,-6.08581 20.60038,-9.12848"
                                id="path1765"
                                strokeDasharray="25" 
                                strokeDashoffset={`${this.state.enterTPathOffset}`}
                            /> 
                            {/*S*/}
                            <path
                                style={{fill:'none', stroke: `rgb(${this.state.fontColor}, ${this.state.fontColor}, ${this.state.fontColor})`, strokeWidth:'0.6973936', strokeLinecap:'round', strokeLinejoin:'miter', strokeMiterlimit:'4', strokeOpacity:'1'}}
                                d="m 91.96547,163.32251 c 0.453663,-0.94513 0.907476,-1.89056 0.416019,-2.58978 -0.491458,-0.69921 -1.919908,-1.1503 -3.183369,-1.02413 -1.263461,0.12616 -2.333978,0.82723 -2.734809,1.91318 -0.400832,1.08595 -0.126123,2.55425 0.680178,3.58104 0.8063,1.02679 2.143731,1.61201 3.916276,1.81286 1.772545,0.20086 3.978485,0.0173 5.690208,-0.31426 1.711724,-0.33155 2.910451,-0.80394 4.105477,-1.88072 1.19503,-1.07678 2.31961,-2.69762 2.89635,-4.74787 0.57674,-2.05025 0.58968,-4.5064 0.14487,-6.45244 -0.4448,-1.94603 -1.34715,-3.38159 -2.95409,-3.9953 -1.606939,-0.61371 -3.918258,-0.40542 -5.985306,0.24087 -2.067048,0.64628 -3.889148,1.73046 -5.365728,2.22577 -1.476579,0.49531 -2.606849,0.40129 -3.542276,-0.54955 -0.935426,-0.95085 -1.675408,-2.75801 -1.41695,-5.16467 0.258458,-2.40666 1.514955,-5.41103 3.63919,-7.62901 2.124235,-2.21798 5.115667,-3.6489 7.816316,-3.69081 2.70065,-0.0419 5.053534,1.27317 5.963084,2.75639 0.90956,1.48322 0.26154,3.07072 -0.67722,3.89954 -0.93875,0.82883 -2.167046,0.89805 -2.763204,0.70562 -0.596158,-0.19244 -0.558375,-0.64585 -0.520596,-1.09922"
                                id="path1773" 
                                strokeDasharray="100"
                                strokeDashoffset={`${this.state.siteSPathOffset}`}
                            />  
                            {/*ite*/}
                            <path
                                style={{fill:'none', stroke: `rgb(${this.state.fontColor}, ${this.state.fontColor}, ${this.state.fontColor})`, strokeWidth:'0.76499999', strokeLinecap:'round', strokeLinejoin:'miter', strokeMiterlimit:'4', strokeOpacity:'1'}}
                                d="m 107.06769,155.76699 c 0.57701,3.26391 1.15407,6.5281 1.70601,8.11375 0.55195,1.58565 1.07839,1.49259 1.75086,1.20415 0.67248,-0.28843 1.42709,-0.73438 1.81672,-2.21452 0.38963,-1.48014 0.38266,-3.97733 -0.0964,-6.99186 -0.47907,-3.01453 -1.42553,-6.53011 -2.2876,-10.17812 -0.86208,-3.64802 -1.63755,-7.42031 -2.20529,-10.63176 -0.56773,-3.21146 -0.92782,-5.86265 -0.0874,-1.72262 0.84047,4.14002 2.88191,15.07332 4.35802,21.27336 1.47611,6.20005 2.38708,7.66776 3.32591,8.37057 0.93884,0.70282 1.90504,0.64059 2.75344,0.21909 0.8484,-0.4215 1.57926,-1.20238 2.16727,-2.17489 0.58802,-0.9725 1.0338,-2.13755 1.11696,-3.50933 0.0831,-1.37177 -0.15892,-2.74107 -0.92073,-3.36637 -0.76181,-0.6253 -2.02559,-0.40188 -2.75012,0.20808 -0.72453,0.60997 -0.87317,1.40954 -0.73068,2.46878 0.14248,1.05925 0.52112,2.08117 1.07587,3.06911 0.55475,0.98794 1.24864,1.84238 2.1843,2.21997 0.93565,0.37758 2.11239,0.27813 3.10393,-0.0709 0.99153,-0.34908 1.7212,-0.89079 2.13986,-1.51179 0.41866,-0.621 0.50958,-1.49782 0.58984,-2.2718"
                                id="path1777"
                                strokeDasharray="130"
                                strokeDashoffset={`${this.state.sitePathOffset}`}
                            /> 
                            {/*Site's t*/}
                            <path
                                style={{fill:'none', stroke: `rgb(${this.state.fontColor}, ${this.state.fontColor}, ${this.state.fontColor})`, strokeWidth:'0.76499999', strokeLinecap:'round', strokeLinejoin:'miter', strokeMiterlimit:'4', strokeOpacity:'1'}}
                                d="m 104.68726,149.6726 c 6.49085,-3.21072 12.98142,-6.42131 19.47169,-9.63175"
                                id="path1781"
                                strokeDasharray="25"
                                strokeDashoffset={`${this.state.siteTPathOffset}`}
                            /> 
                            <circle r="0.7" fill={`rgb(${this.state.iDot}, ${this.state.iDot}, ${this.state.iDot})`} cx="105" cy="149.5"/>
                        </g>
                        </svg>
                    </div>
            </div>
        )
    }
} 