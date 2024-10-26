import LogoWhiteImg from "../../../assets/images/all img/logo.png";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="">
						<img src={LogoWhiteImg} alt="Logo"  style={{height:'50px'}}/>
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p> &copy; Copyright 2024, All Rights Reserved by <span style={{color:'#BFF747'}}>M S Creation </span></p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
