import PropTypes from "prop-types";
import Header from "../layouts/Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
function Layout({ children }) {
  const location = useLocation();

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="mainChildren">{children}</main>
      {location.pathname === "/Singup" ||
      location.pathname === "/FrogetPassword" ? (
        ""
      ) : (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
