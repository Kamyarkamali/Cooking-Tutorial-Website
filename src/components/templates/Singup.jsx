import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../templates/singup.css";

function Singup() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName && !isLogin)
      formErrors.firstName = "این فیلد الزامی است";
    if (!formData.lastName && !isLogin)
      formErrors.lastName = "این فیلد الزامی است";
    if (!formData.email && !isLogin) formErrors.email = "این فیلد الزامی است";
    if (!formData.password) formErrors.password = "این فیلد الزامی است";
    if (!formData.username && isLogin)
      formErrors.username = "این فیلد الزامی است";
    if (!formData.password && isLogin)
      formErrors.password = "این فیلد الزامی است";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      navigate("/");
    }
  };

  return (
    <div className="containersingup">
      <div className="singupform">
        <h1>{isLogin ? "ورود" : "ثبت نام"}</h1>

        <div className="btn-singup">
          <button
            className={isLogin ? "noactive" : "active"}
            onClick={toggleForm}
          >
            ورود
          </button>
          <button
            className={isLogin ? "active" : "noactive"}
            onClick={toggleForm}
          >
            ثبت نام
          </button>
        </div>

        <form className="forms" onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              <input
                type="text"
                placeholder="نام کاربری"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <span className="error">{errors.username}</span>
              )}
              <input
                type="password"
                placeholder="رمز عبور"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
              <div className="checks">
                <label className="checks">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  مرا بخاطر بسپار
                </label>
                <Link className="link2" to={"/FrogetPassword"}>
                  <label className="lab">فراموشی رمز؟</label>
                </Link>
              </div>
              <div className="btnsingup">
                <button type="submit">ورود</button>
              </div>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="نام"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
              <input
                type="text"
                placeholder="نام خانوادگی"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
              <input
                type="email"
                placeholder="پست الکترونیک"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <input
                type="password"
                placeholder="رمز عبور"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
              <div className="btnsingup">
                <button type="submit">ثبت نام</button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default Singup;
