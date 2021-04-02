import React from "react";
import data from "../AboutData/Data";
import { Link } from 'react-router-dom';
import aboutImg from "../img/banner.jpeg";
import banner from "../img/images/bg-img.jpeg"

export default function LandingPage() {
	return (
		<>
			<div page="landing-page" breadcrumb="landing" />
			<section class="landing-section spad">
				<div class="container">
					<div class="row">
						<div class="col-lg-6">
							<div class="about-text">
								<div class="at-title">
                  <h2>Welcome to Realtors-inc</h2>
                  <img src={banner} alt=""/>
									<p>
										Lorem Ipsum has been the industry’s standard dummy text ever
										since the 1500s, when an unknown printer took a galley of
										type.
									</p>
								</div>
								<div class="at-feature">
									{data.map((item) => {
										const { id, img, title, text } = item;
										return (
											<div class="af-item" key={id}>
                        <div class="af-icon">
                          <img src={img} alt="" />
												</div>
												<div class="af-text">
													<h6>{title}</h6>
													<p>{text}</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<div class="col-lg-6">
              <div class="landing-pic set-bg">
                <Link to= '/landing'>
                <img src={aboutImg} alt="about us" />
                </Link>
								
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}