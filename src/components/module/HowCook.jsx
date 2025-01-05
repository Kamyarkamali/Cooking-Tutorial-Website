import "../module/howCook.css";
import image1 from "../../assets/images/how.png";
import { Link } from "react-router-dom";

function HowCook() {
  return (
    <div className="containerhow">
      <div className="image-container">
        <img src={image1} alt="How to cook" className="image" />
        <div className="text-container">
          <h1>چی بپزم؟</h1>
          <p>حالا با موادی که تو خونه داری، آشپزی کن</p>
          <Link to={"/Singup"}>
            <button className="action-button">بزن بریم</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HowCook;
