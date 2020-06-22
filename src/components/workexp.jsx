import React, { Component } from 'react'

export default class WorkExp extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="workexp">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                      <i class="icon-briefcase"></i>
                      </div>
                      <div className="timeline-label">
                      <h2>Software Engineer Intern, Charles River Development, Burlington, MA<span> July,2019 - December,2019</span></h2>
                        <ul>
                            <li>Developed end-to-end JSON based <strong>unit test infrastructure</strong> to reduce efforts in unit test creation and maintenance.</li>
                            <li>Improved unit test coverage by 80% and reduced software engineers’ testing efforts by 70%.</li>
                            <li>Helped to replace legacy assertions of ~6000-unit tests without any performance impact.</li>
                            <li>Collaborated with team to troubleshoot, investigate, and fix bugs in the systems.</li>
                            <li>Written Python scripts to help QA team in automation testing.</li>
                            <li><strong>Leveraged knowledge</strong> in OOPs, Java 8,Python, Design patterns, Reflection, Junit4, JSON, Jackson, Agile, Test-Driven-Development.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                      <i class="icon-briefcase"></i>
                      </div>
                      <div className="timeline-label">
                      <h2>Data Analyst, Media.net Pvt. LTD., Mumbai, India<span> May,2017 - June, 2018</span></h2>
                        <ul>
                            <li>Developed complex/ad hoc reports using SQL/Hive to address discrepancies and auditing issues for ~20 advertisers/ publishers. </li>
                            <li>Assisted the Product Managers & developers’ team with crunching, visualization, A/B Testing and reporting of data.</li>
                            <li>Led the product team migration; conducted training explaining media.net’s header bidding product to team of 10 people.</li>
                        </ul> 
                      </div>
                    </div>
                  </article>
                   <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                      <i class="icon-briefcase"></i>
                      </div>
                      <div className="timeline-label">
                      <h2>Software Engineer, Faclon Labs, Mumbai, India <span> Oct,2016 - March, 2017</span></h2>
                        <ul>
                            <li>Worked on Full stack of web application enabling clients to configure/monitor startup’s custom IOT devices.</li>
                            <li>Implemented front-end aspects of web application utilizing HTML, CSS, Angular.js, JavaScript, Bootstrap and D3.js.</li>
                            <li>Developed backend services using Node.js, express, Mongo DB, AWS to show real time data and logs of the devices.</li>
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