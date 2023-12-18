import React from "react";
import { Link } from "react-router-dom";
import { faBars, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navigation = () => {
  return (
    <div>
      <div className="nav-header">
        <div className="burger-menu">
          <FontAwesomeIcon className="fa" icon={faBars} />
        </div>
        <div className="nav-logo">
          <Link to="/">
            <img
              src="https://cdn-fo.sivillage.com/fo/assets/common/image/icons/etc/ico-common-logo-jaju.svg"
              alt="logo"
              width={150}
            />
          </Link>
        </div>
        <div>
          <FontAwesomeIcon className="fa" icon={faUser} />
          <span style={{ cursor: "pointer" }}>Login</span>
        </div>
      </div>

      <div className="search-box">
        <FontAwesomeIcon className="fa" icon={faSearch} />
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
        />
      </div>
    </div>
  );
};

export default Navigation;
