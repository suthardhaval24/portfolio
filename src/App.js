import React, { Component } from 'react';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Skills from './components/skills'
import Education from './components/education'
import WorkExp from './components/workexp';
import Projects from './components/projects';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Education></Education>
            <WorkExp></WorkExp>
            <Skills></Skills>
            <Projects></Projects>
          </div>
        </div>
      </div>
    );
  }
}

export default App;