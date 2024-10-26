import BreadCrumb from "../../components/common/Breadcrumb";
import TwoColumnFaq from "../../components/contact/TwoColumnFaq";
import AutoSlider from "../../components/home-one/auto-slider";
import Services from "../../components/home-one/services";
import WhyChooseUs from "../../components/home-one/why-choose-us";

const services = [
	{
		id: crypto.randomUUID(),
		title: "Logo and Branding",
		description:
			"FWe create distinctive logos and cohesive branding strategies that resonate with your target audience, establishing a powerful and recognizable brand identity.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Social Media Poster Design",
		description:
			" Engaging and visually appealing social media posters tailored to promote your brand, increase interaction, and drive traffic across your social platforms.",
		icon: "icon-branding",
	},
	{
		id: crypto.randomUUID(),
		title: "Product Package Design",
		description:
			"From concept to creation, our product packaging designs not only protect but also captivate, ensuring your products stand out on the shelves and reflect your brand's quality.",
		icon: "icon-web",
	},
	
	{
		id: crypto.randomUUID(),
		title: "Flyer Design",
		description:
			"Creative and impactful flyer designs to promote events, products, or services. Our designs are crafted to capture attention and convey your message effectively.",
		icon: "icon-layers",
	},
	{
		id: crypto.randomUUID(),
		title: "Business Card & Letterhead Design",
		description:
			"Elegant and professional designs that reinforce your brand identity, leaving a lasting impression through every business interaction.",
		icon: "icon-rating-stars-1",
	},
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description:
			" Customized, responsive websites that not only look great but also provide a seamless user experience, helping you establish a strong online presence and achieve your business goals..",
		icon: "icon-chef",
	},
	
	{
		id: crypto.randomUUID(),
		title: "Motion Graphics",
		description:
			" Dynamic and engaging motion graphics to animate your ideas, perfect for advertisements, explainer videos, and enhancing your digital presence.",
		icon: "icon-target-1",
	},
	{
		id: crypto.randomUUID(),
		title: "Social Media Management",
		description:
			"  Comprehensive social media management services to grow your online community, enhance brand visibility, and engage your audience with consistent and strategic content.",
		icon: "icon-target-1",
	},
	{
		id: crypto.randomUUID(),
		title: "Company Profile / Brochure Design",
		description:
			" Expertly crafted company profiles and brochures to showcase your business, services, and achievements in a compelling, professional format.",
		icon: "icon-design-thinking",
	},
	{
		id: crypto.randomUUID(),
		title: "Videography",
		description:
			" High-quality videography services that capture the essence of your brand, creating visually compelling content for marketing campaigns, product showcases, and corporate storytelling.",
		icon: "icon-target-1",
	},
];

function ServicePage() {
	return (
		<>
			<BreadCrumb title="Service" />
			<Services services={services} />
			<AutoSlider />
			<WhyChooseUs />
			<TwoColumnFaq />
		</>
	);
}

export default ServicePage;
