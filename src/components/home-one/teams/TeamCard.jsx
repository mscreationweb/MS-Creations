import { Link } from "react-router-dom";
function TeamCard({ team: { name, designation, img,link,whatsapp,insta,face} }) {
	return (
		<div className="col-xl-3 col-md-6">
			<div className="aximo-team-wrap" >
				<div className="aximo-team-thumb" style={{height:"250px"}}>
					<img src={img} alt={name} />
					<div className="aximo-social-icon team-social">
						<ul>
							<li>
								<a href={face}>
									<i className="icon-facebook"></i>
								</a>
							</li>
							<li>
								<a href={insta}>
									<i className="icon-instagram"></i>
								</a>
							</li>
							<li>
								<a href={whatsapp}>
									<i className="icon-call"></i>
								</a>
							</li>
							<li>
								<a href={link}>
									<i className="icon-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="aximo-team-data">
					<Link to="/single-team">
						<h3>{name}</h3>
					</Link>
					<p>{designation}</p>
				</div>
			</div>
		</div>
	);
}

export default TeamCard;