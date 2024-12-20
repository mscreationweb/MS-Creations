import Star2Img from "../../../assets/images/v1/star2.png";
import Project1Img from "../../../assets/images/home/logo.webp";
import Project2Img from "../../../assets/images/home/social.webp";
import Project3Img from "../../../assets/images/home/package1.webp";
import Project4Img from "../../../assets/images/home/profile.webp";
import Project5Img from "../../../assets/images/home/Flyer.webp";
import Project6Img from "../../../assets/images/home/Webdev .webp";
import Project7Img from "../../../assets/images/home/Videography.webp";
import Project8Img from "../../../assets/images/home/Motion .webp";
import Project9Img from "../../../assets/images/home/SocialMedia .webp";
import Project10Img from "../../../assets/images/home/Business.webp";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Social Media Poster Design",
		description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Product Package Design",
		description: "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Company Profile / Brochure Design",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Flyer Design",
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Project5Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Business Card & Letterhead Design",
		description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
		img: Project10Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
		img: Project6Img,
	},
	{
		id: crypto.randomUUID(),
		title: "video - Photography & video Production",
		description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
		img: Project7Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Motion Graphics",
		description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
		img: Project8Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Social Media Management",
		description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
		img: Project9Img,
	},
];

const swiperSettings = {
	spaceBetween: 24,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination, Mousewheel],
	mousewheel: true,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 3.5,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center light">
					<h2>
						Have a wide range of
						<span className="aximo-title-animation">
							creative projects
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
			</div>
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
