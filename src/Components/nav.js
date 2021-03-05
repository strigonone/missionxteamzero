import React from "react";
import star from "../img/logo.png";
import flagnz from "../img/nz.jpg";
import flagmaori from "../img/maori.jpg";
import { Link } from "react-router-dom";
import "../CSS/nav.css";

function Nav() {
  return (
    <div className="topNav">
      <div className="topLogo">
        <img src={star} className="star" alt="starlogo" />
      </div>

      <div className="topNavLinks">
        <nav>
          <ul>
            <li>
              {/* <a href="#" className="a1">HOME </a> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#" className="a1">
                FEATURES{" "}
              </a>
            </li>
            <li>
              <a href="#" className="a1">
                TEACHERS{" "}
              </a>
            </li>

            <li>
              <Link to="/profilepage">Profile Page TEST LOL</Link>{" "}
              {/* Be sure to update this properly once finalized - Johnny */}
            </li>
            <li>
              <Link to="/login">JOSEPH LOGIN TEST </Link>{" "}
              {/* Be sure to update this properly once finalized - Johnny */}
            </li>
          </ul>
        </nav>
      </div>

      <div className="topNavUser">
        <div>
          <div className="topNavLogin">
            <p>
              <a href="#" className="a1">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                REGISTER | LOGIN{" "}
              </a>
            </p>
          </div>
        </div>

        <div>
          <div className="topFlagLang">
            <p>
              LANG: <img src={flagnz} alt="NZ Flag" />{" "}
              <img src={flagmaori} alt="Maori Flag" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;