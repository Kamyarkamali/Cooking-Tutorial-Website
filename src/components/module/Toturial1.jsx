import { foods } from "../../data/localdata";
import "./toturial1.css";
import folder from "../../assets/images/folder_3767091 1.png";
import view from "../../assets/images/view_709612 1.png";
import arrow from "../../assets/images/up-arrow_7699468 1.png";
import { Link, useLocation } from "react-router-dom";

function Toutorial() {
  const location = useLocation();
  return (
    <>
      <div className="pageView">
        {location.pathname === "/" ? (
          <Link to={"/foodsBest"}>
            <h3>پیشنهاد سر‌آشپز</h3>
          </Link>
        ) : (
          ""
        )}
        <div>
          {location.pathname === "/" ? (
            <div className="arrow">
              <h3>دیدن همه آموزش‌ها</h3>
              <img src={arrow} alt="arrow" />
            </div>
          ) : (
            <h3>میتونی از این غذاها لذت ببری:) </h3>
          )}
        </div>
      </div>
      <div className="Toutorialcontaier">
        {foods.map((item) => (
          <Link to={`/foods/${item.id}`} key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <h5>{item.title}</h5>
            <div className="folder">
              <img src={folder} alt="icon" />
              <p>{item.desc}</p>
              <div className="view">
                <img src={view} alt="view" />
                <p>{item.view} بازدید</p>
              </div>
            </div>
            <div className="btnview">
              <button>دستور پخت</button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Toutorial;
