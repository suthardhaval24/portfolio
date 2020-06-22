import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="education">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                      <i class="icon-pencil"></i> 
                      </div>
                      <div className="timeline-label">
                        <h2>Northeastern University, Boston, MA <span> September 2018 - Present</span></h2>
                        <ul>
                            <li>Pursing Masters in STEM graduate Program : <strong>Computer Information Systems</strong></li>
                            <li>Specializing in <strong>Web Development, Full-stack, Cloud/DevOps Engineering</strong></li>
                            <li>Completed <strong>6-Months of Internship as a Software Developer</strong> to apply Skillset I acquired during program</li>
                            <li>Current Running GPA is <strong>3.77</strong></li>
                            <li><strong>Coursework:</strong> Application Engineering Development, Database Systems, Web Development, Data Science, Data Structures & Algorithms, Network Structures and Cloud Computing</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                      <i class="icon-pencil"></i> 
                      </div>
                      <div className="timeline-label">
                        <h2>K.J Somaiya College of Engineering, Mumbai, India <span> August 2012 - June 2016</span></h2>
                        <ul>
                            <li>Completed Bachelors of Engineering from Mumbai University in <strong>Information Technology</strong> with <strong>Distinction</strong></li>
                            <li>Participated in High-Performance Computing National Symposium - IIT, Bombay to represent Final Capstone Work on Hadoop Ecosystem</li>
                            <li>Conducated Workshops for Junior Students to share idea about latest Trends and Technology to utilize in thier Project work</li>
                            <li>Active Member of Computer Information Society of India</li>
                        </ul> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}