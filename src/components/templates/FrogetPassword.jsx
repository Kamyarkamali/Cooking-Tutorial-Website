import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../templates/frogetpassword.css";

function FrogetPassword() {
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("لطفاً ایمیل خود را وارد کنید");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("ایمیل وارد شده معتبر نیست");
      return;
    }

    if (isPasswordReset) {
      if (!newPassword || !confirmPassword) {
        setPasswordError("لطفاً رمز عبور و تایید رمز عبور را وارد کنید");
        return;
      }

      if (newPassword !== confirmPassword) {
        setPasswordError("رمز عبور و تایید رمز عبور با هم مطابقت ندارند");
        return;
      }

      navigate("/");
    } else {
      setIsPasswordReset(true);
    }
  };

  return (
    <div className="containersingup">
      <div className="singupform">
        <Link className="link" to={"/"}>
          <h1>بازیابی رمز عبور</h1>
        </Link>

        <form className="forms" onSubmit={handleSubmit}>
          {!isPasswordReset ? (
            <>
              <h4 className="frogettext">آدرس ایمیلتو وارد کن:</h4>
              <input
                type="text"
                placeholder="پست الکترونیکی یا ایمیل"
                name="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="error">{emailError}</p>}
            </>
          ) : (
            <>
              <h4 className="frogettext">رمز عبور جدید رو وارد کن:</h4>
              <input
                type="password"
                placeholder="رمز عبور جدید"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <h4 className="frogettext">تایید رمز عبور جدید:</h4>
              <input
                type="password"
                placeholder="تایید رمز عبور جدید"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {passwordError && <p className="error">{passwordError}</p>}
            </>
          )}

          <div className="btnsingups">
            <button type="submit">
              {isPasswordReset ? "بازیابی رمز عبور" : "ارسال"}
            </button>
            <Link to={"/Singup"}>
              <button type="button">بازگشت به ورود</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FrogetPassword;
