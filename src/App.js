import React, { Component } from 'react';
import './App.css';
import Svg from './Svg'
import Svg2 from './Svg2'
import SvgThing from './SvgThing'
import SvgPractice from './SvgPractice'
import SvgClock from './SvgClock'

class App extends Component {
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
          <SvgPractice/>
          <SvgThing angularLimit={360} thetaDelta={0.3}/>
          <SvgClock angularLimit={360}/>
        </section>
      </div>
    );
  }
}

export default App;
