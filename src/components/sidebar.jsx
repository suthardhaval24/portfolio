import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Dhaval Suthar</a></h1>
              <span className="email"><i className="icon-mail"></i> suthardhaval24@gmail.com</span><br/>
              <span><i className="icon-phone"></i> (+1) 857.333.7805</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#education" data-nav-section="workexp">Work Experience</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills and Interests</a></li>
                  <li><a href="#skills" data-nav-section="projects">projects</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/suthardhaval24/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/suthardhaval24" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                Reach me out on any of the platform mentioned above.
              </small></p>
              <p><small>
              © All rights reserved
                </small></p>

            </div>
          </aside>
        </div>
      </div>
    )
  }
}