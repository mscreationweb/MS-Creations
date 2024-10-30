import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import AutoSlider from "../components/home-one/auto-slider";
import Teams from "../components/home-one/teams";
// Teams images
import Team1Img from "../assets/images/team/Sajeel.webp";
import Team2Img from "../assets/images/team/Aysha.jpg";
import Team3Img from "../assets/images/team/Afnan.jpg";
import Team4Img from "../assets/images/team/Ismail.jpg";

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Muhammad Sajeel",
		designation: "Founder",
		img: Team1Img,
		face:"https://www.facebook.com/muhammad.sajeel.77?mibextid=ZbWKwL",
		insta:"https://www.instagram.com/muhammed_sajeel/profilecard/?igsh=MXNwaXh0NzFxbTBocg==",
		link:"https://www.linkedin.com/in/muhammed-sajeel-53230015b/",
		whatsapp:"https://wa.me/919480889252",
	},
	{
		id: crypto.randomUUID(),
		name: "Aysha Salwa",
		designation: "Graphic Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Mohammad Afnan",
		designation: "Marketing Executive",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Ismail",
		designation: "Web Developer",
		img: Team4Img,
		link:"https://www.linkedin.com/in/ismail-ismail-a39623261",
	},
];

function AboutUs() {
	return (
		<>
			<BreadCrumb title="About Us" />
			<About />
			<Story />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default AboutUs;
