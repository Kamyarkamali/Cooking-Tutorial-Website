import "../templates/sugestFood.css";
import changal2 from "../../assets/images/changal2.png";
import { started } from "../../data/localdata";

function SugestFood() {
  return (
    <div className="container">
      <div className="containersugest">
        <img src={changal2} alt="/" />
        <h3>پیشنهاد غذا</h3>
        <img src={changal2} alt="/" />
      </div>

      <div className="textfood">
        <p>موادتو وارد کن پیشنهاد غذاش با ما</p>
      </div>

      <div className="inputs">
        <div className="nested">
          <input
            type="text"
            placeholder="موادی که تو خونه داری رو وارد کن..."
          />
        </div>
      </div>
      <div className="searchfood">
        <h3>میتونی با انتخاب عکس موادی که داری کارتو آسون کنی</h3>
      </div>

      <div className="started">
        {started.map((item) => (
          <div key={item.id} className="food-item">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="buttoncook">
        <p>حالا مد زمان پخت غذات رو مشحص کن:</p>
        <div>
          <button>بالای نیم ساعت</button>
          <button>زیر نیم ساعت</button>
        </div>
      </div>
    </div>
  );
}

export default SugestFood;
