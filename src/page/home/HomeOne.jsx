import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";
import BrandLogo from "../../components/home-seven/brand-logo";

const servicesData = [
	
	{
		id: crypto.randomUUID(),
		title: "Graphic Design",
		description:
			" From logos to marketing materials, our graphic design services cover everything needed to visually communicate your brand’s message. We specialize in creating eye-catching designs for logos, social media, packaging, brochures, flyers, business cards, and more.",
		icon: "icon-branding",
	},

	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description:
			"We develop custom, responsive websites that provide an optimal user experience across all devices. Our web development services include everything from design to deployment, ensuring your site is both functional and visually appealing.",
		icon: "icon-design-thinking",
	},
	{
		id: crypto.randomUUID(),
		title: "Motion Graphics",
		description:
			"High-quality videography services to capture and convey your brand’s story through compelling visuals. Whether it’s promotional videos, corporate events, or product showcases, we create impactful videos that resonate with your audience.",
		icon: "icon-web",
	},
	{
		id: crypto.randomUUID(),
		title: "Motion Graphic",
		description:
			"Dynamic motion graphics to bring your ideas to life. Ideal for explainer videos, advertisements, and enhancing digital content, our motion graphics make your message more engaging and memorable.",
		icon: "icon-design-tools",
	},
];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Andrew Mark",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<Projects />
			<BrandLogo />
			{/* <WhyChooseUs /> */}
			{/* <Testimonial /> */}
			<AutoSlider />
			{/* <Teams teams={teamsData} /> */}
		</>
	);
}

export default HomeOne;
