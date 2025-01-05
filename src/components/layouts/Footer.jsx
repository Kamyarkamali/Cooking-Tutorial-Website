import "./footer.css";

import logo from "../../assets/images/logo.png";
import namad from "../../assets/images/enamad 1.png";

import sochial1 from "../../assets/images/1.png";
import sochial2 from "../../assets/images/2.png";
import sochial3 from "../../assets/images/3.png";

function Footer() {
  return (
    <>
      <div className="footercontainer">
        <div>
          <div className="lgoandname">
            <img src={logo} alt="logo" />
            <p>فودلند</p>
          </div>
          <p className="ptag">
            ما در فودلند برای کمک به سلامتِ تغذیه، از طریق اصلاح ساختار آشپزی
            شروع به فعالیت کرده است؛ با این هدف که هیچ انسانی به‌خاطر آشپزی
            ناسالم واشتباه، در مسیر زندگی‌اش، با مشکلات سلامتی مواجه نشود.
          </p>
        </div>

        <div className="containerfooter2">
          <p>
            برای اطلاع از جدیدترین‌های فودلند ما را در شبکه‌های اجتماعی دنبال
            کنید
          </p>

          <div className="sochial">
            <img src={sochial1} alt="sochial" />
            <img src={sochial2} alt="sochial" />
            <img src={sochial3} alt="sochial" />
          </div>
        </div>
      </div>

      <div className="dibaider"></div>

      <div className="bootomfooter">
        <div>
          <p>
            سایت فودلند به آشپزان کمک می‌کند غذای دلخواهشان را به بهترین نحو و
            در کمترین زمان بپزند.
          </p>
        </div>

        <div className="enamad">
          <img src={namad} alt="enamad" />
        </div>
      </div>
    </>
  );
}

export default Footer;
