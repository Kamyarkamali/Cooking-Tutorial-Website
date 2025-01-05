import bg from "../../assets/images/bg.png";
import bgBackground from "../../assets/images/rb_168838 1.png";
import pizza from "../../assets/images/pizzabg.png";
import frish from "../../assets/images/fresh-mint-leaves-isolated_prev_ui 1.png";
import frishing3 from "../../assets/images/frishing3.png";
import circle from "../../assets/images/circle.png";
import "./Hero.css";
import arrowLeft from "../../assets/images/lefft.png";
import { Link } from "react-router-dom";

function HeroPage() {
  return (
    <div className="containerhero">
      <div className="containerhero">
        <img className="bg" src={bg} alt="bg" />
        <img className="pizza" src={pizza} alt="pizza" />
        <div className="bgborder">
          <img src={bgBackground} alt="bgoizza" />
        </div>
        <div className="frishimg">
          <img src={frish} alt="frish" />
        </div>
        <div className="circle">
          <img src={circle} alt="circle" />
        </div>
        <div className="circle2">
          <img src={circle} alt="circle" />
        </div>
      </div>

      <div className="container2">
        <h3>لذت آشپزی</h3>
        <p>
          با <span>فودلند</span>
        </p>
        <Link to={"/SugestFood"}>
          <button>شروع کنید</button>
        </Link>
        <div className="leftPng">
          <img src={arrowLeft} alt="leftarrow" />
        </div>
        <div className="cricle3">
          <img src={circle} alt="circle" />
        </div>
        <div className="cricle4">
          <img src={circle} alt="circle" />
        </div>
      </div>

      <div className="container3">
        <img className="frishing3" src={frishing3} alt="/" />
      </div>
    </div>
  );
}

export default HeroPage;
