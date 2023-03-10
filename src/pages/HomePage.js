import { Link } from "react-router-dom";
import "../components/HomePage/Homepage.css";
import image from "../assets/img/flatHomeImg(1).jpg"
function HomePage() {
	return (
		<div className="hpContainer">
			<div className="home-introduction-section">
				<p className="home-intro-p">Game Deals is the best place to find the best discounts on the most popular video games.</p>
				<button className="home-toshop-btn" type="button"><Link to="/shop" >Shop now</Link></button>
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
