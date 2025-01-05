import "../module/HeaderTop.css";

import { foods, menuTop1 } from "../../data/localdata";
import HammburgerMenu from "../module/HammburgerMenu";

// pic logo
import logo from "../../assets/images/logo.png";
import menu from "../../assets/svgs/hamburgerMenu.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function HeaderTop({ open, setOpen }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const results = foods.filter((food) =>
        food.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFoods(results);
      setIsResultsVisible(true);
    } else {
      setFilteredFoods([]);
      setIsResultsVisible(false);
    }
  };

  const handleResultClick = () => {
    setIsResultsVisible(false);
    setSearchQuery("");
  };

  return (
    <div className="headerContainer">
      <div className="container1">
        <img
          onClick={() => setOpen(true)}
          className={`menu ${open ? "open" : ""}`}
          src={menu}
          alt="logo website"
        />
        <Link to={"/"}>
          <img className="logo" src={logo} alt="logo website" />
        </Link>
        <h3>فودلند</h3>

        <div>
          <ul className="menutop1">
            {menuTop1.map((item) => (
              <Link key={item.id} to={item.paths}>
                <li>{item.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="searchBar">
        <img src="/src/assets/images/search1.png" alt="searchLogo" />
        <input
          type="text"
          placeholder="جستوجو کنید..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <img
          className="imgsearch2"
          src="/src/assets/images/search2.png"
          alt="searrchLogo2"
        />
        {isResultsVisible && filteredFoods.length > 0 && (
          <div className="searchResults">
            {filteredFoods.map((food) => (
              <Link
                key={food.id}
                to={`/foods/${food.id}`}
                className="searchResultItem"
                onClick={handleResultClick}
              >
                <img
                  src={food.image}
                  alt={food.title}
                  className="resultImage"
                />
                <span>{food.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div>
        <Link to={"/Singup"}>
          <button className="btn">عضویت</button>
        </Link>
      </div>

      <div className={`componentMenu ${open ? "open" : ""}`}>
        {open && <HammburgerMenu open={open} setOpen={setOpen} />}
      </div>
    </div>
  );
}

export default HeaderTop;
