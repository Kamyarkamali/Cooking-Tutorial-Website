import HeroPage from "../module/HeroPage";
import HowCook from "../module/HowCook";
import Toutorial from "../module/toturial1";
import Toutorial2 from "../module/Toturial2";

function HomePage() {
  return (
    <div>
      <HeroPage />
      <Toutorial />
      <Toutorial2 />
      <HowCook />
    </div>
  );
}

export default HomePage;
