import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
        <section className="colorlib-experience" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Skills and Interests</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                      <i class="icon-thumbs-up"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Technical skills:</h2>
                        <p>Java, Python, Spring MVC, Restful Web Services, SpringBoot, React, Node, MySQL, SQL Server, MongoDB, AWS, Postman, Docker, GIT</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                      <i class="icon-thumbs-up"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Functional skills:</h2>
                        <p>Software Development Life cycle, Large Scale Application Development, Agile(Scrum), Test Driven Development</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                      <i class="icon-thumbs-up"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Soft skils:</h2>
                        <p> Teamwork, Communication, Problem Solving, Quick Learner</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                      <i class="icon-thumbs-up"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Interest:</h2>
                        <p> Enterpise Application, Web Development, Back-End Engineering, Cloud Services, DevOps</p> 
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
            /*
            <div>
                <section className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <h2 className="colorlib-heading">Skills and Interest</h2>
                                            <ul>
                                                <li><strong>Technical Skills:</strong> Java, Python, Spring MVC, Restful Web Services, SpringBoot, React, Node, MySQL, SQL Server, MongoDB, AWS, Postman, Docker, GIT</li>
                                                <li><strong>Functional Skills:</strong> Software Development Life cycle, Large Scale Application Development, Agile(Scrum), Test Driven Development</li>
                                                <li><strong>Soft Skills:</strong> Teamwork, Communication, Problem Solving, Quick Learner</li>
                                                <li><strong>Interests:</strong> Enterpise Application, Web Development, Back-End Engineering, Cloud Services, DevOps</li>
                                            </ul>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            */
        )
    }
}
