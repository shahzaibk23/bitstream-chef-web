import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useHistory
} from "react-router-dom";

export const HeadMenu = () => {
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.clear(); // Clear all session storage
    history.push('/'); // Redirect to the login page
  }
  

  return (
    <>
      <div
        id="menu-bar"
        className="container-fluid d-flex justify-content-between align-items-center text-center"
      >
        <div className="col-sm-2 mediaqu">
        <img src="../img/logo.png" alt="logo" className="logo" />
        </div>
        <div className="col-6 col-sm-7">
        <Link to="/dashboard"><img src="../img/title.png" alt="title" className="title img-fluid" /></Link>
        </div>
        <div className="col-6 col-sm-3">
          <div className="token-icon mr-3">
            <Link to="/dashboard/pricing">
          <p className="inline">01 Tkn <i class="fa fa-coins"></i></p>
          </Link>
          </div>
        <img src="../img/cross.png" alt="logo" className="cross" onClick={handleLogout}/>
        </div>
      </div>
    </>
  );
};

