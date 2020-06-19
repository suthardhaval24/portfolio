import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Northeastern University, Boston, MA <span> September 2018 - Present</span></h2>
                        <p>I am Pursuing Master in Information Systems with Specialization in Enterpise/Web Appplication Development and Cloud computing. My coursework includes Application Engineering and Development, Database Design and Development, Data Scinece, Web Development, Data Structures and Algorithms, Network structures and Cloud Computing. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Intern, Charles River Development, Burlington, MA<span> July,2019 - December,2019</span></h2>
                        <p>Worked on Developing end-to-end Unit Test Infrastructure to replace legacy assertions and reduce software engineers efforts in unit test creation in maintenance. Infrastructure is up and livea, replaced assertions of ~6500 test without perfomance inpact.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Data Analyst, Media.net Pvt. LTD., Mumbai, India<span> May,2017 - June, 2018</span></h2>
                        <p>Created ad-hoc reports and Excel Dashboards by analyzing big data extraced from RDBMS/Hive. Helped Business team to solve issue related discrepancy. Assited Product Manageer and Developer team in A/B Testing, Data Visualization. Conducted Training for team of 1o people to demonstrate Media.net Custom Header Bidder Product.   </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer, Faclon Labs, Mumbai, India <span> Oct,2016 - March, 2017</span></h2>
                        <p>Worked as Full-stack engineer to develop web application enabling clients to configure/monitor startup’s custom IOT devices.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>K.J Somaiya College of Engineering, Mumbai, India <span> August 2012 - June 2016</span></h2>
                        <p>Graduated as Bachelor of Engineer in Information Technology with distinction. I was a part of Computer Society of India. Participated in International High Performace Computing Symposium at IIT Bombay by represting project on High Resoultion Spatial Data analysis using Hadoop.   </p> 
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