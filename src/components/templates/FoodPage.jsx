import { useParams } from "react-router-dom";
import { foods } from "../../data/localdata";
import changal from "../../assets/images/changal.png";
import "./fooddetailse.css";

function FoodPage() {
  const { id } = useParams();
  const product = foods.find((item) => item.id === parseInt(id));

  const ingredients = {
    "سالاد مرغ": [
      "مرغ پخته‌شده",
      "کاهو",
      "خیار",
      "گوجه‌فرنگی",
      "فلفل دلمه‌ای",
      "ذرت",
      "آووکادو",
      "سس مایونز",
      "روغن زیتون",
      "نمک",
      "فلفل",
      "لیمو",
      "سبزیجات معطر",
    ],
    لازانیا: [
      "ورق لازانیا",
      "گوشت چرخ‌کرده",
      "پنیر موزارلا",
      "سس بشامل",
      "گوجه‌فرنگی",
      "پیاز",
      "فلفل دلمه‌ای",
      "قارچ",
      "ریحان",
      "نمک",
      "فلفل سیاه",
      "روغن زیتون",
      "آبلیمو",
    ],
    "گوشت با پنیر گریل شده": [
      "گوشت چرخ‌کرده",
      "نان تست",
      "پنیر گودا یا چدار",
      "کره",
      "سیر",
      "پیاز",
      "فلفل سیاه",
      "نمک",
      "سس باربیکیو یا خردل",
      "روغن زیتون",
    ],
    "مرغ بوریتو": [
      "سینه مرغ",
      "نان تورتیلا",
      "برنج پخته‌شده",
      "لوبیا سیاه",
      "پنیر چدار",
      "گوجه‌فرنگی",
      "فلفل دلمه‌ای",
      "کاهو",
      "آووکادو",
      "سس سالسا",
      "خامه ترش",
      "نمک",
      "فلفل",
      "روغن زیتون",
    ],
    "املت کینوا": [
      "کینوا پخته‌شده",
      "تخم‌مرغ",
      "پیاز",
      "گوجه‌فرنگی",
      "فلفل دلمه‌ای",
      "روغن زیتون",
      "نمک",
      "فلفل سیاه",
      "ریحان تازه یا جعفری",
    ],
  };

  if (!product) {
    return <div>محصول یافت نشد!</div>;
  }

  return (
    <div className="food-detail">
      <h4>دستور پخت {product.title}</h4>
      <img src={product.image} alt="detailse" />
      <div className="ingredients-table">
        <h3>مواد لازم</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>مواد اولیه</th>
            </tr>
          </thead>
          <tbody>
            {ingredients[product.title]?.length ? (
              ingredients[product.title].map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">مواد لازم موجود نیست</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="recipe-container">
        <div className="recipe-title">
          <h3>دستور پخت</h3>
        </div>
        <div className="recipe-steps">
          {product.recipe && <p>{product.recipe}</p>}
          {product.recipe2 && <p>{product.recipe2}</p>}
          {product.recipe3 && <p>{product.recipe3}</p>}
          {product.recipe4 && <p>{product.recipe4}</p>}
          {product.recipe5 && <p>{product.recipe5}</p>}
        </div>
      </div>
    </div>
  );
}

export default FoodPage;
