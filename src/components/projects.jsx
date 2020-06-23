import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/aws.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>Billing and Invocing Web Services - AWS Deployment</h3>
											<span>Technologies : Java, Spring Boot, Amazon S3, SQS, SNS, DynamoDB, Amazon RDS, EC2, CircleCI, AWS CodDeploy</span>
											<p className="icon">
												<span><a href="https://github.com/suthardhaval24/webapp"><i class="icon-github"></i></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/packer.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>Amazon Machine Image</h3>
											<span>Technologies: Hashicorp Packer, Shell(Bash) Script, CircleCI, GIT </span>
											<p className="icon">
											<span><a href="https://github.com/suthardhaval24/ami"><i class="icon-github"></i></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/lamda.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>Serverless Computing: AWS Lambda</h3>
											<span>Technologies: AWS Lambda, CircleCI, DynamoDB, Java, SQS, SNS</span>
											<p className="icon">
											<span><a href="https://github.com/suthardhaval24/serverless"><i class="icon-github"></i></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/cloudformation.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>AWS Cloud Infrastructure: Automation</h3>
											<span>Technologies: CloudFormation, Terraform, Shell Scripting, Git</span>
											<p className="icon">
											<span><a href="https://github.com/suthardhaval24/infrastructure"><i class="icon-github"></i></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/spring.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>Event Booking Portal</h3>
											<span>Technologies: Spring MVC, Java, Hibernate, JDBC, MYSQL, HTML, CSS, JavaScript</span>
											<p className="icon">
											<span><a href="https://github.com/suthardhaval24/EventBookingSystem"><i class="icon-github"></i></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/music.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>Music Mood Analyzer</h3>
											<span>Technologies: Flask, REST APIs, Python, IBM NLP toolkit, Google Traslator APIs, Heroku, Docker</span>
											<p className="icon">
											<span><a href="https://github.com/suthardhaval24/MusicMoodAnalyzer"><i class="icon-github"></i></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="https://github.com/suthardhaval24" className="btn btn-primary btn-lg btn-load-more">See all projects on Github <i class="icon-arrow-right"></i></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}