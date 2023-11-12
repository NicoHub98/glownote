import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { localUser } from "../../store/UserSlice";
import BtnNavbar from "./BtnNavbar";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const [btnText, setBtnText] = useState("");
  const [showLogout, setShowLogout] = useState(false);

  const logout = () => {
    dispatch(localUser(null));
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setBtnText("Iniciar Sesión");
    } else if (location.pathname !== "/") {
      setBtnText("Home");
    }
  }, [location]);

  useEffect(() => {
    if (user.user) {
      setShowLogout(true);
    } else {
      setShowLogout(false);
    }
  }, [user]);

  return (
    <div className="w-full flex flex-row justify-between items-center bg-[rgba(0,0,0,0.2)]">
      <div className="ml-3">LOGO {user.user}</div>
      <div className="flex flex-row gap-2">
        {!showLogout && (
          <Link to={location.pathname === "/" ? "/login" : "/"}>
            <BtnNavbar text={btnText} />
          </Link>
        )}
        {showLogout && (
          <>
            <BtnNavbar text="New Note" />
            <BtnNavbar text="Logout" fn={logout} />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
