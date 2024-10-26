import Story1Img from "../../../assets/images/about/about1.webp";
import Story2Img from "../../../assets/images/about/about2.webp";
import Story3Img from "../../../assets/images/about/about3.webp";
import Story4Img from "../../../assets/images/about/about4.webp";
function StoryPhotos() {
	return (
		<>
			<div className="col-lg-8">
				<div className="aximo-story-thumb">
					<img src={Story1Img} alt="Story1Img" />
				</div>
			</div>
			<div className="col-lg-4">
				<div className="aximo-story-thumb">
					<img src={Story2Img} alt="StroryIMg 2" />
				</div>
			</div>
			<div className="col-lg-4">
				<div className="aximo-story-thumb">
					<img src={Story3Img} alt="StoryImg 3" />
				</div>
			</div>
			<div className="col-lg-8">
				<div className="aximo-story-thumb">
					<img src={Story4Img} alt="Story4Img" />
				</div>
			</div>
		</>
	);
}

export default StoryPhotos;
