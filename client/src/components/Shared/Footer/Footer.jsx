import React from "react";
import './Footer.css'
export default function Footer() {
	return (
		<footer className="footer-section">
			<div className="foot-container">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="fs-about">
							<div className="fs-logo">
								<a href="#">
									<img src="img/f-logo.png" alt="" />
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-sm-6">
						<div className="fs-widget">
							<h5>Help</h5>
						
									<a className="bottom-links" href="#">Privacy Policy</a>
                
									<a className="bottom-links" href="#">Careers</a>
								
									<a className="bottom-links" href="#">FAQs</a>
							
						</div>
					</div>
					<div className="col-lg-2 col-sm-6">
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="fs-widget">
							<h5>Newsletter</h5>
							<p>Sign Up for Weeekly Newsletter</p>
							<form action="#" className="subscribe-form">
								<input type="text" placeholder="Email" />
								<button type="submit" className="site-btn">
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
