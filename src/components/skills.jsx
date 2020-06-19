import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">What I bring?</span>
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
        )
    }
}
