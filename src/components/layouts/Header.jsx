import { useState } from "react";
import HeaderTop from "../module/HeaderTop";
import { useLocation } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/Singup" ||
      location.pathname === "/FrogetPassword" ? (
        ""
      ) : (
        <HeaderTop open={open} setOpen={setOpen} />
      )}
    </div>
  );
}

export default Header;
