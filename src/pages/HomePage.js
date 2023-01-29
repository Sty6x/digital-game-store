import homeStyles from "../components/HomePage/HomePage.module.css";
function HomePage() {
	// Refactor: Let Homepage component fetch apis and pass result as props to contentContainer instead.
	return (
		<div className={`hpContainer ${homeStyles.size} ${homeStyles.display} ${homeStyles.spacing}`}>
		</div>
	);
}

export default HomePage;
