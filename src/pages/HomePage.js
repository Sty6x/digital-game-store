import homeStyles from '../components/HomePage/HomePage.module.css';
import HomeMain from '../components/HomePage/HomeMain';
function HomePage() {
  return (
    <div className={`hpContainer ${homeStyles.size} ${homeStyles.display}`}>
      <HomeMain/>
    </div>
  );
}

export default HomePage;
