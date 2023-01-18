import homeStyles from "../components/HomePage/HomePage.module.css";
import ContentContainer from "../components/HomePage/ContentContainer";
function HomePage() {
	return (
		<div className={`hpContainer ${homeStyles.size} ${homeStyles.display} ${homeStyles.spacing}`}>
			<ContentContainer />
		</div>
	);
}

export default HomePage;
