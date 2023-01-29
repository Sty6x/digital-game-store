import { Link } from "react-router-dom";
import "../components/HomePage/Homepage.css";
function HomePage() {
	// Refactor: Let Homepage component fetch apis and pass result as props to contentContainer instead.
	return (
		<div className="hpContainer">
			<div className="home-introduction">
				<p>Voluptate est et reprehenderit dolore proident duis in. Laborum sit velit nulla occaecat sint nisi cupidatat non minim. Voluptate non labore reprehenderit magna ut ipsum aliquip fugiat nulla id. Duis ad eiusmod nulla exercitation laborum aute est anim cillum magna in elit ut. Mollit minim anim officia nulla aliqua ad minim. Deserunt amet id laboris fugiat ut velit.</p>
				<button type="button"><Link to="/shop" >Shop now</Link></button>
			</div>
			<div className="home-img-section">
				<div className="home-img-container">
					<img src=".." alt="homepage image" />
				</div>
			</div>

		</div>
	);
}

export default HomePage;
