import { Link } from "react-router-dom";
import "../components/HomePage/Homepage.css";
import image from "../assets/img/flatHomeImg(1).jpg"
function HomePage() {
	// Refactor: Let Homepage component fetch apis and pass result as props to contentContainer instead.
	return (
		<div className="hpContainer">
			<div className="home-introduction-section">
				<p className="home-intro-p"> Mollit minim anim officia nulla aliqua ad minim. Deserunt amet id laboris fugiat ut velit.</p>
				<button type="button"><Link to="/shop" >Shop now</Link></button>
			</div>
			<div className="home-img-section">
				<div className="home-img-container">
					<img className="home-img" src={image} alt="homepage image" />
				</div>
			</div>

		</div>
	);
}

export default HomePage;
