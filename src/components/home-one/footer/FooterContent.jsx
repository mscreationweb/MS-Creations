import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";
function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<span className="aximo-title-animation">
					Lets start a
					<span className="aximo-title-icon">
						<img src={Star2Img} alt="Star2Img" />
					</span>
				</span>
				<br />
				project together
			</h2>
			<p>
				We work closely with our clients to understand their objectives, target audience, and unique needs. We
				use our creative skills to translate these requirements and practical design solutions.
			</p>
			<div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>Give us a call:</li>
						<li>
							<a href="tel:+91 9480889252">+91 948 088 9252

							</a>
						</li>
						<li>
							<a href="tel:+91 9008654889">+91 9008654889


							</a>
						</li>
					</ul>
				</div>
				<div className="aximo-info">
					<ul>
						<li>Send us an email:</li>
						<li>
							<a href="mailto:mscreation361@gmail.com">mscreation361@gmail.com</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-social-icon social-large">
				<ul>
				

					<li>
						<a href="https://www.facebook.com/profile.php?id=61555685601112&mibextid=ZbWKwL" target="_blank">
							<i className="icon-facebook"></i>
						</a>
					</li>
					
					<li>
						<a href="https://www.instagram.com/mscreation.tech/profilecard/?igsh=eW80emdweHU5eWlj" target="_blank">
							<i className="icon-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/ms-creation/posts/?feedView=all" target="_blank">
							<i className="icon-linkedin"></i>
						</a>
					</li>
					<li><a href="https://wa.me/919480889252" target="_blank"> <i className="icon-call"></i></a>
</li>
				</ul>
			</div>
			<div className="aximo-hero-shape aximo-footer-shape">
				<img src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default FooterContent;
