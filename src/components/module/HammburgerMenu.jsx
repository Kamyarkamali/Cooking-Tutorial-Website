import "../module/Hamburger.css";

import logo from "../../assets/images/logo.png";
import close from "../../assets/svgs/close.svg";
import { menuTop1 } from "../../data/localdata";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function HammburgerMenu({ open, setOpen }) {
  useEffect(() => {
    const handelClick = (e) => {
      if (e.target.closest(".hamburgermenu") && e.target.closest(".overlay")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handelClick);
    return () => {
      document.removeEventListener("click", handelClick);
    };
  }, [open]);

  return (
    <div className={`${open ? "overlay" : ""}`}>
      <div className="hamburgermenu">
        <div className="container1">
          <img src={logo} alt="logo" />
          <img
            onClick={() => setOpen(true)}
            className="closes"
            src={close}
            alt="close"
          />
        </div>

        <div className="text">
          <h3>سایت آشپزی فودلند</h3>
        </div>

        <div className="menutop2">
          {menuTop1.map((item) => (
            <Link className="link" key={item.id} to={item.paths}>
              <li>{item.title}</li>
            </Link>
          ))}
        </div>
        <div className="loginbtn">
          <Link to={"/Singup"}>
            <button>ثبت نام / ورود</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HammburgerMenu;
