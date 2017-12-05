import React, { Component } from 'react';
import './App.css';
import Svg from './Svg'
import Svg2 from './Svg2'
import SvgThing from './SvgThing'
import SvgPractice from './SvgPractice'
import SvgClock from './SvgClock'
import SvgPath from './SvgPath'
import SvgSiteEntry from './SvgSiteEntry'
import SvgStarryNight from './SvgStarryNight'
import SvgPhoenix from './SvgPhoenix'
import SvgSwan from './SvgSwan'
import SvgSnowflake from './SvgSnowflake'

class App extends Component {

  componentWillUpdate
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React SVG Animations</h1>
          <h3 className="App-subtitle">Repo by Emily Keator</h3>
        </header>
        <section>
          <Svg/>
          <Svg2/>
          <SvgPhoenix/>          
          <SvgPractice/>
          <SvgThing angularLimit={360} thetaDelta={0.3}/>
          <SvgClock angularLimit={360}/>
          <SvgPath/>
          <SvgSiteEntry/>
          <SvgStarryNight/>  
          <SvgSnowflake/>
          {/* <SvgSwan/> */}
        </section>
      </div>
    );
  }
}

export default App;
