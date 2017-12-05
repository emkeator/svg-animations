import React, {Component} from 'react'
import starry from './starryNight.jpg'


/* EXAMPLE ADAPTED FROM https://www.aaron-powell.com/demos/react-svg/react-svg-example/ */
export default class SvgThing extends Component {
        constructor(props) {
            super(props);

            this.state = {
                speed1Offset: 0,
                speed2Offset: 50,
                timelast: 0
            };
        }

        componentDidMount() {
            //In componentDidMount, create a callback for the requestAnimationFrame
            const animate = (timestamp) => {
                if(timestamp - this.state.timelast >= 100){
                    let {speed1Offset, speed2Offset, timelast} = this.state
                    speed1Offset += 2
                    speed2Offset += 10
                    timelast = timestamp
                    // console.log(speed1Offset)
                    this.setState({
                        speed1Offset, speed2Offset, timelast
                    })
                }
                
                this.rafId = requestAnimationFrame(animate);
            };

            this.rafId = requestAnimationFrame(animate);
        }

        componentWillUnmount() {
            cancelAnimationFrame(this.rafId);
        }

        // #748BB0 light blue
        //darker blue #283D81

        render() {
            let darkBlue = "#283D81"
            let lightBlue = "#748BB0"
            let middleBlue = "#5675B9"
            let corona = "#BBBF9F"
            let middleCorona = "#7F8343"
            let darkCorona = "#B3B148"
            let red = "red"
            return (
                    <div className="compassRose">
                        <div className="pContainer">
                            <p>This animation is easier than it looks! It loads Van Gogh's 
                                "Starry Night" in an SVG Image tag (different from your typical 
                                html img tag). Spiral and circle paths are made to move by changing
                                their dasharray offset, bringing the night to life. </p>
                        </div>
                        <svg
                            width="209.83739mm"
                            height="184.26093mm"
                            viewBox="0 0 209.83739 184.26093"
                            version="1.1"
                            id="svg1086" >
                            <g id="layer1" transform="translate(-0.25236595,-59.704063)">
                                <image
                                    y="59.704063"
                                    x="0.25236595"
                                    id="image1096"
                                    xlinkHref={starry}
                                    style={{imageRendering:'optimizeSpeed'}}
                                    preserveAspectRatio="none"
                                    height="184.26093"
                                    width="209.83739" /> 
                                <path
                                    style={{fill:'none', stroke: lightBlue, strokeWidth:'0.96499997', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5', strokeOpacity:'1'}}
                                    d="m 94.471445,117.11592 c 0.07487,5.14786 2.530622,10.21286 6.525995,13.45987 2.32198,1.88706 5.15414,3.17622 8.12618,3.52191 2.97205,0.34569 6.07516,-0.27967 8.59669,-1.89041 2.88557,-1.84329 4.89681,-4.90622 5.74522,-8.22351 0.84842,-3.3173 0.5847,-6.8646 -0.44285,-10.13085 -1.68985,-5.37148 -5.37552,-9.96277 -9.78899,-13.45987 -4.70713,-3.729789 -10.33377,-6.339462 -16.26536,-7.280033 -5.931589,-0.940571 -12.157785,-0.179314 -17.588253,2.385533 -5.256523,2.482692 -9.602371,6.52187 -13.685341,10.66 -4.082971,4.13813 -8.038624,8.47601 -12.826519,11.77311 -1.306709,0.89984 -2.669849,1.71773 -4.078749,2.44725"
                                    id="path1099"
                                    strokeDashoffset={`${this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleBlue, strokeWidth:'0.86500002', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 3.1074897,98.761558 c 1.4183766,5.400152 4.8056329,10.260132 9.3811203,13.459872 3.274141,2.28968 7.133157,3.73564 11.105747,4.16127 3.972589,0.42564 8.050342,-0.16995 11.735242,-1.71402"
                                    id="path1646"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: lightBlue, strokeWidth:'0.86500002', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 5.5547384,122.4183 c 2.1571743,2.93005 5.1678496,5.2239 8.5653706,6.52599 4.692428,1.79836 10.098132,1.64821 14.683494,-0.40787"
                                    id="path1650"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 69.183208,110.9978 c 3.362936,-4.68164 8.330248,-8.18798 13.867744,-9.78899 5.024432,-1.452675 10.445347,-1.346602 15.499241,0 4.216037,1.12336 8.243027,3.12803 11.420497,6.11812 3.01672,2.83883 5.22182,6.56046 6.11812,10.60474 0.30003,1.35381 0.45518,2.75866 0.23991,4.12851 -0.21527,1.36984 -0.82753,2.70836 -1.87141,3.62112 -0.92754,0.81104 -2.15667,1.24582 -3.38807,1.2879 -1.2314,0.0421 -2.46137,-0.2951 -3.5458,-0.88003 -2.02162,-1.09044 -3.54335,-3.06868 -4.07875,-5.30237"
                                    id="path1658"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 84.682449,132.20729 c 0.717218,5.75922 4.094519,11.1322 8.973246,14.27562 4.660153,3.00259 10.365395,3.93085 15.907115,4.07875 2.54763,0.068 5.11109,-0.0154 7.61517,-0.48934 2.50407,-0.47398 4.9548,-1.34956 7.06833,-2.77366 3.21312,-2.165 5.55406,-5.51951 8.97324,-7.34175 2.84628,-1.51691 6.31508,-1.81661 9.38112,-0.81575 2.83032,0.92391 5.32416,2.9863 6.526,5.71025 0.46206,1.04726 0.73416,2.18933 0.69528,3.33333 -0.0389,1.14399 -0.40025,2.28925 -1.10316,3.19267 -0.60442,0.77683 -1.45337,1.35987 -2.39444,1.64827 -0.94108,0.28841 -1.96989,0.28135 -2.90793,-0.0168 -1.22782,-0.39021 -2.29021,-1.28937 -2.85512,-2.44725 -0.61712,-1.2649 -0.61712,-2.81385 0,-4.07875"
                                    id="path1662"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: lightBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 96.510819,139.14116 c 2.167962,1.36277 4.501961,2.46112 6.933871,3.263 3.40704,1.12341 7.04418,1.66219 10.60475,1.22363 3.06306,-0.37728 6.04229,-1.48571 8.56537,-3.263 3.07035,-2.1628 5.37892,-5.2229 8.15749,-7.74962 2.77876,-2.52689 6.10992,-4.54668 9.789,-5.30238 4.61502,-0.94795 9.56652,0.20204 13.45987,2.85513 3.13965,2.13949 5.59814,5.18977 7.34174,8.56537 1.62379,3.14365 2.66365,6.66524 2.44725,10.19687 -0.18711,3.0536 -1.38697,6.12198 -3.67087,8.15749 -1.55815,1.38869 -3.54559,2.24006 -5.5922,2.64952 -2.04662,0.40947 -4.15767,0.39565 -6.23617,0.20561 -3.16243,-0.28915 -6.37918,-1.02336 -8.97325,-2.85513 -1.69843,-1.19932 -3.10173,-2.89471 -3.67087,-4.89449 -0.31923,-1.12167 -0.37011,-2.31262 -0.20394,-3.46694 0.11072,-0.76912 0.31673,-1.52447 0.61182,-2.24331"
                                    id="path1666"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: darkBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 7.1862375,78.775692 c 1.0816157,-0.448046 2.2942377,-0.574231 3.4449275,-0.358476 1.150691,0.215754 2.235234,0.772657 3.08107,1.582101 0.875399,0.837734 1.478883,1.914685 2.033865,2.991772 0.554981,1.077088 1.081391,2.182317 1.840945,3.12635 1.110338,1.380015 2.663217,2.341693 4.282685,3.059061 2.060389,0.912681 4.27824,1.470933 6.525997,1.631498 1.496677,0.106913 3.005818,0.03832 4.486624,-0.203936"
                                    id="path1670"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: darkBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 33.290225,100.39306 c -1.977825,0.12776 -3.972623,-0.01 -5.914184,-0.407878 -2.135933,-0.437919 -4.208006,-1.191913 -6.118123,-2.243312 -1.876519,-1.032905 -3.593405,-2.350638 -5.098435,-3.87481 -1.331227,-1.348159 -2.498199,-2.858357 -3.466936,-4.486622"
                                    id="path1678"
                                    strokeDashoffset={`${this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: darkBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 54.90759,102.22849 c 4.637404,-6.308745 10.969001,-11.359794 18.150428,-14.479552 13.53622,-5.88041 29.634642,-4.576832 42.826852,2.039374 3.88765,1.949747 7.57353,4.347198 10.73488,7.334034 3.16135,2.986834 5.79104,6.578064 7.41555,10.612454 1.26426,3.13973 1.90981,6.53954 1.77132,9.92141 -0.13848,3.38187 -1.07037,6.74186 -2.79101,9.65658 -2.50052,4.23582 -6.6827,7.44714 -11.42049,8.76931"
                                    id="path1686"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 206.0252,65.519761 c -4.61453,-3.035062 -10.10773,-4.716846 -15.63048,-4.785384 -5.52275,-0.06854 -11.056,1.476405 -15.74443,4.396016 -4.68842,2.919611 -8.51586,7.203818 -10.89066,12.190379 -2.3748,4.98656 -3.28878,10.658272 -2.60066,16.138414 0.62549,4.981385 2.56733,9.791504 5.57547,13.811024 3.00814,4.01952 7.07549,7.23894 11.67834,9.24374 4.60285,2.00479 9.73033,2.79023 14.72224,2.25518 4.99191,-0.53505 9.83646,-2.38933 13.90987,-5.32408"
                                    id="path1690"
                                    strokeDashoffset={`${this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: lightBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 205.61733,70.006384 c -3.56391,-2.715599 -7.89351,-4.414861 -12.35311,-4.848296 -4.4596,-0.433435 -9.03539,0.400301 -13.05552,2.378796 -4.02014,1.978495 -7.47216,5.095618 -9.84924,8.8937 -2.37708,3.798083 -3.67184,8.265355 -3.69418,12.745916 -0.0229,4.587633 1.28979,9.174117 3.73638,13.05498 2.44658,3.88087 6.01876,7.0429 10.16786,9.00042 4.1491,1.95752 8.86099,2.70387 13.41193,2.12441 4.55095,-0.57947 8.92546,-2.48277 12.45163,-5.41757"
                                    id="path1694"
                                    strokeDashoffset={`${this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: darkBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 101.81319,76.940256 c 5.01967,-1.621792 9.87786,-3.742972 14.47956,-6.32206 2.08503,-1.168585 4.12336,-2.433825 6.3107,-3.397402 2.18734,-0.963578 4.55834,-1.622467 6.94523,-1.497095 3.33168,0.174998 6.54391,1.965819 8.4341,4.714988 1.89018,2.74917 2.41135,6.39604 1.35489,9.56063 -0.87948,2.63446 -2.82011,4.897718 -5.28952,6.168897 -2.46941,1.271179 -5.439,1.535561 -8.09414,0.720618 -2.65513,-0.814943 -4.96507,-2.699774 -6.29612,-5.137431 -1.33105,-2.437657 -1.66781,-5.399916 -0.91789,-8.074144"
                                    id="path1698"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: lightBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 124.45024,68.782759 c 1.40016,-0.911469 3.06536,-1.410407 4.73603,-1.419038 1.67067,-0.0086 3.34094,0.473076 4.75044,1.370029 1.4095,0.896954 2.55327,2.206005 3.25303,3.72309 0.69976,1.517086 0.95305,3.23688 0.72037,4.89129 -0.23628,1.680002 -0.97319,3.286399 -2.09245,4.561343 -1.11926,1.274944 -2.6167,2.21368 -4.25196,2.665527 -1.63526,0.451848 -3.40223,0.415122 -5.0173,-0.104283 -1.61507,-0.519405 -3.07221,-1.519551 -4.13753,-2.839901"
                                    id="path1702"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: lightBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 143.8243,94.274934 c -1.81621,0.955087 -3.29114,2.544074 -4.10854,4.426272 -0.8174,1.882194 -0.97168,4.044714 -0.42976,6.023894 0.54191,1.97917 1.77632,3.76146 3.43855,4.96471 1.66222,1.20325 3.74089,1.81923 5.79031,1.71587 1.76953,-0.0892 3.50899,-0.70977 4.93497,-1.76134 1.42597,-1.05158 2.53288,-2.53026 3.13927,-4.19504 0.6064,-1.66478 0.70982,-3.50924 0.29248,-5.23117 -0.41734,-1.721929 -1.35392,-3.314569 -2.65648,-4.515634 -2.04954,-1.889842 -5.00748,-2.74609 -7.74962,-2.24331"
                                    id="path1710"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: corona, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 71.018644,151.98922 c -1.090946,0.7464 -1.9398,1.84091 -2.391262,3.08327 -0.451462,1.24236 -0.503318,2.62649 -0.14608,3.89915 0.357238,1.27266 1.121818,2.42761 2.153856,3.25355 1.032039,0.82594 2.326474,1.31882 3.646486,1.38846 1.202585,0.0634 2.421418,-0.22283 3.470601,-0.81397 1.049184,-0.59115 1.925292,-1.48505 2.496291,-2.54533 0.570999,-1.06028 0.835146,-2.28338 0.753806,-3.48489 -0.08134,-1.20151 -0.507749,-2.37754 -1.214388,-3.35268 -0.764836,-1.05545 -1.856328,-1.87067 -3.085457,-2.30448 -1.22913,-0.43381 -2.590521,-0.48432 -3.848415,-0.14277"
                                    id="path1714"
                                    strokeDashoffset={`${this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: corona, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 68.775332,146.68685 c -2.347607,1.27184 -4.249986,3.34762 -5.312739,5.79699 -1.062753,2.44936 -1.279101,5.25669 -0.604189,7.83997 0.674911,2.58328 2.236775,4.92603 4.361789,6.54256 2.125014,1.61653 4.79962,2.49652 7.469325,2.45753 2.671469,-0.039 5.321916,-0.99859 7.395188,-2.68376 2.073272,-1.68518 3.554979,-4.08574 4.12583,-6.69579 0.570852,-2.61006 0.225829,-5.41214 -0.966804,-7.80294 -1.192633,-2.39079 -3.225598,-4.35304 -5.659716,-5.45456 -2.472165,-1.11873 -5.339377,-1.33929 -7.95356,-0.61182"
                                    id="path1718"
                                    strokeDashoffset={`${this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: darkBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 55.111526,75.512694 c 4.399799,1.870146 8.983689,3.306888 13.663806,4.282685 6.225336,1.297973 12.65227,1.777373 18.966179,1.019687 4.848469,-0.581829 9.608809,-1.892648 14.071679,-3.87481"
                                    id="path1722"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: lightBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 15.547671,64.704011 c -0.638622,1.373147 -0.884886,2.926148 -0.702398,4.429501 0.182487,1.503352 0.793153,2.952333 1.741752,4.132812 0.948599,1.180479 2.232152,2.088747 3.660974,2.590581 1.428823,0.501833 2.998426,0.595655 4.476855,0.267601 1.593111,-0.353502 3.074542,-1.197932 4.186451,-2.392346 1.111909,-1.194413 1.848782,-2.73408 2.076101,-4.350029 0.227318,-1.615949 -0.0568,-3.300811 -0.806321,-4.750354 -0.749527,-1.449543 -1.961589,-2.656348 -3.416856,-3.394701 -1.57483,-0.799015 -3.425482,-1.040854 -5.15275,-0.67335 -1.727268,0.367503 -3.319168,1.341801 -4.432309,2.712724"
                                    id="path1726"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: darkCorona, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 23.093355,147.91047 c 0.407975,-1.29192 0.815849,-2.58352 1.648547,-3.58606 0.832697,-1.00253 2.090621,-1.71649 3.347939,-1.59754 1.257319,0.11895 2.515249,1.07089 3.330947,2.15844 0.815697,1.08755 1.189597,2.31122 1.033161,3.59274 -0.156435,1.28153 -0.829053,2.59314 -1.627839,3.477 -0.798785,0.88386 -1.716283,1.32562 -2.78182,1.32761 -1.065536,0.002 -2.2996,-0.44365 -3.138142,-1.2574 -0.838543,-0.81375 -1.269014,-1.9396 -1.710824,-3.0951"
                                    id="path1923"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: lightBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 9.3275803,147.5026 c 1.1165137,-0.48848 2.1756517,-0.95185 2.8212947,-1.69956 0.645642,-0.7477 0.849638,-1.76768 0.832625,-2.7022 -0.01701,-0.93452 -0.255013,-1.78452 -0.832672,-2.46415 -0.577659,-0.67962 -1.495568,-1.18957 -2.4472097,-1.2916 -0.9516412,-0.10202 -1.9372413,0.20385 -2.6511696,0.7817 -0.7139283,0.57785 -1.155652,1.42732 -1.3086792,2.24326 -0.1530272,0.81595 -0.017119,1.59742 0.3228654,2.27739 0.3399847,0.67997 0.883667,1.25764 1.3765431,1.71652 0.4928762,0.45888 0.9347334,0.79877 1.0706796,0.88374 0.1359461,0.085 -0.034014,-0.085 -0.2039643,-0.25495"
                                    id="path1927"
                                    strokeDashoffset={`${this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: lightBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 67.959584,124.86554 c 1.631798,-0.27197 3.263297,-0.54388 4.282836,-1.49557 1.019539,-0.95169 1.42749,-2.58349 1.164574,-4.05607 -0.262916,-1.47259 -1.164761,-2.74186 -2.28629,-3.59154 -1.12153,-0.84968 -2.447174,-1.25757 -3.704804,-0.95175 -1.25763,0.30582 -2.447116,1.32538 -3.076065,2.44717 -0.628949,1.12179 -0.696911,2.34512 -0.395526,3.51045 0.301385,1.16533 0.990154,2.3018 1.669995,3.42354"
                                    id="path1931"
                                    strokeDashoffset={`${this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleCorona, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 45.821309,97.45218 c 1.970975,0.624943 3.941782,1.249833 5.792407,0.817131 1.850625,-0.432702 3.581236,-1.922951 4.37256,-3.725232 0.791324,-1.802281 0.650431,-3.821736 0.217846,-5.383806 -0.432585,-1.56207 -1.153698,-2.619702 -2.379308,-3.484861 -1.22561,-0.865159 -2.95617,-1.538154 -4.614509,-1.562253 -1.658338,-0.0241 -3.24447,0.600741 -4.341821,1.661706 -1.09735,1.060966 -1.73888,2.640115 -1.979286,4.034276 -0.240406,1.394161 -0.09623,2.643684 0.17709,3.721398 0.27332,1.077715 0.639954,1.902642 1.024557,2.767997"
                                    id="path1939"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: darkBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 47.840186,71.783597 c 1.826921,-0.576922 3.653525,-1.153744 4.638769,-2.37942 0.985245,-1.225677 1.129475,-3.100673 0.937203,-4.638694 -0.192273,-1.538022 -0.721106,-2.739916 -1.754384,-3.556972 -1.033277,-0.817055 -2.571628,-1.249717 -3.965619,-1.105585 -1.39399,0.144132 -2.643628,0.865077 -3.460956,1.946732 -0.817327,1.081656 -1.201778,2.52335 -1.057569,3.989698 0.14421,1.466347 0.817022,2.956148 1.460829,3.772185 0.643807,0.816037 1.27918,0.962661 1.90388,1.106823"
                                    id="path1943"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 66.298493,64.717527 c -0.09821,2.258853 -0.192261,4.422027 0.614348,6.050046 0.806609,1.62802 2.55825,2.698468 4.384907,3.227198 1.826656,0.528731 3.845615,0.528731 5.207589,-0.483654 1.361974,-1.012385 2.146882,-3.121825 2.53137,-4.852157 0.384489,-1.730332 0.384489,-3.028396 -0.07206,-4.061652 -0.456543,-1.033256 -1.370025,-1.754426 -2.643787,-2.283179 -1.273762,-0.528752 -2.90803,-0.865219 -4.302036,-0.648986 -1.394006,0.216234 -2.547507,0.985234 -3.701457,1.754534"
                                    id="path1947"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleCorona, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 82.593717,73.658269 c 0.769058,1.105522 1.538155,2.211097 2.647833,2.64306 1.109678,0.431963 2.543868,0.192931 3.564041,-0.401102 1.020174,-0.594033 1.575419,-1.473171 1.838502,-2.434281 0.263083,-0.961111 0.217395,-1.874873 -0.08192,-2.780879 -0.299317,-0.906005 -0.806291,-1.689509 -1.579638,-2.195009 -0.773348,-0.505501 -1.774034,-0.696108 -2.75948,-0.575983 -0.985447,0.120124 -1.946619,0.552652 -2.57167,1.249718 -0.625051,0.697067 -0.913366,1.658118 -1.201873,2.619804"
                                    id="path1951"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleCorona, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 143.21248,102.63637 c 1.1559,-1.29188 2.31154,-2.58349 3.73893,-3.229149 1.42739,-0.645663 3.12723,-0.645663 4.1897,0.09934 1.06246,0.745001 1.45245,2.109951 1.4525,3.469541 5e-5,1.35959 -0.40778,2.65104 -1.32556,3.50094 -0.91779,0.8499 -2.345,1.25767 -3.64993,1.18354 -1.30493,-0.0741 -2.43413,-0.60551 -3.07403,-1.21858 -0.6399,-0.61306 -0.78781,-1.42658 -0.92373,-2.17413"
                                    id="path1959"
                                    strokeDashoffset={`${this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: corona, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 182.77634,77.144193 c -3.19484,5.77791 -6.38987,11.556136 -5.99915,16.742254 0.39072,5.186117 4.29965,9.701613 8.51452,11.808963 4.21487,2.10735 8.70147,1.76746 12.23629,0.33985 3.53483,-1.4276 6.1182,-3.94299 7.54788,-7.273609 1.42968,-3.330621 1.69711,-7.34212 0.77943,-11.250694 -0.91768,-3.908575 -3.02518,-7.647685 -5.77816,-9.856935 -2.75299,-2.20925 -6.15203,-2.889058 -8.73933,-2.900188 -2.58731,-0.01113 -4.48242,0.690763 -6.31817,1.370672"
                                    id="path1963"
                                    strokeDashoffset={`${this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: darkBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 86.925761,76.940256 c 1.90368,0 3.807098,0 6.18619,-0.91769 2.379093,-0.91769 5.234614,-2.753382 7.868249,-4.635985 2.63364,-1.882604 4.98001,-3.759696 6.84933,-5.493094 1.86932,-1.733398 3.22907,-3.29711 4.04479,-4.248791 0.81572,-0.951682 1.08768,-1.291636 1.35937,-1.631245"
                                    id="path1986" 
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 52.868217,140.77266 c 2.515544,-1.29177 5.03077,-2.58337 7.579822,-4.04483 2.549051,-1.46147 5.132581,-3.09317 7.355564,-4.80709 2.222984,-1.71392 4.167014,-3.58852 6.036423,-5.6619 1.86941,-2.07338 3.680308,-4.35376 5.023562,-6.76486 1.343253,-2.41109 2.132542,-4.77896 3.51813,-6.92647 1.385589,-2.1475 3.252708,-3.88125 5.496033,-4.90083 2.243325,-1.01958 4.826526,-1.29149 7.27369,-0.88358 2.447163,0.40792 4.758449,1.49559 6.661789,3.29697 1.90333,1.80138 3.39892,4.31669 4.89446,6.83192"
                                    id="path1990"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: darkBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 150.35029,81.222941 c 1.75868,-4.531996 3.53504,-9.109523 6.62803,-12.61029 3.09299,-3.500767 7.51195,-5.948188 11.93028,-8.395262"
                                    id="path2006"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 195.82833,129.5561 c -6.45775,0 -12.77981,0 -18.28635,-2.37937 -5.50653,-2.37936 -10.12893,-7.13771 -14.75151,-11.89624"
                                    id="path2010"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 183.38815,135.47029 c -3.73862,-0.5438 -7.47748,-1.08763 -11.10007,-2.872 -3.62258,-1.78437 -7.05033,-4.74165 -10.51729,-7.73275"
                                    id="path2014"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 4.1271766,155.04828 c 3.4052126,1.0683 6.9340374,2.17539 9.9590514,3.09308 3.025013,0.9177 5.608342,1.66551 7.783552,2.68515 2.17521,1.01963 3.942786,2.31132 5.710197,3.60289"
                                    id="path2304"
                                    strokeDashoffset={`${this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: darkBlue, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'5,5'}}
                                    d="m 149.12667,69.107989 c 0.9519,-1.56383 1.9036,-3.127351 3.31822,-4.639177 1.41461,-1.511825 3.20807,-2.906736 5.04321,-4.334069"
                                    id="path2308"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: darkCorona, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 20.238231,66.539448 c -0.203871,0.9514 -0.407809,1.903108 -0.271825,2.719095 0.135983,0.815986 0.611684,1.495559 1.359645,1.835481 0.747961,0.339922 1.63161,0.339922 2.481251,-5e-6 0.849642,-0.339927 1.59762,-1.019907 1.937382,-1.869455 0.339762,-0.849548 0.271758,-1.869612 -0.01708,-2.634193 -0.288842,-0.764581 -0.866787,-1.342527 -1.410488,-1.614443 -0.543701,-0.271917 -1.087534,-0.271917 -1.631632,-0.271917"
                                    id="path2312"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                                <path
                                    style={{fill:'none', stroke: middleCorona, strokeWidth:'0.765', strokeLinecap:'round', strokeLinejoin:'miter', strokeOpacity:'1', strokeMiterlimit:'4', strokeDasharray:'3,3'}}
                                    d="m 126.22658,74.637704 c -0.20387,0.9514 -0.40781,1.903109 -0.27182,2.719095 0.13598,0.815986 0.61168,1.495563 1.35965,1.835483 0.74796,0.339921 1.6316,0.339921 2.48125,-7e-6 0.84964,-0.339928 1.59761,-1.019905 1.93738,-1.869454 0.33976,-0.84955 0.27175,-1.869613 -0.0171,-2.634193 -0.28884,-0.76458 -0.86679,-1.342526 -1.41049,-1.614444 -0.5437,-0.271917 -1.08753,-0.271917 -1.63163,-0.271917"
                                    id="path2312-8"
                                    strokeDashoffset={`${-this.state.speed1Offset}`}
                                    />
                            </g>
                        </svg>
                    </div>
            );
        }
    }