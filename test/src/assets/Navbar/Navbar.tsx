import {
  CoinIcon,
  GridIcon,
  HomeIcon,
  LoginIcon,
  LogoutIcon,
} from "../Icons/index";
import { Link } from "react-router-dom";

import s from "./Navbar.module.scss";

const NavbarClient: React.FC = () => {
  const status = "unauthenticated";

  const handleLogout = () => {
    // void signOut({
    //   redirect: true,
    //   callbackUrl: "/",
    // });
    return;
  };

  return (
    <div className={s.padding}>
      <nav className={s.Navbar}>
        <div className={s.iconsGrop}>
          <Link to="/">
            <HomeIcon />
          </Link>
          <Link to="/dashboard">
            <GridIcon />
          </Link>
          <Link to="/transactions">
            <CoinIcon />
          </Link>
        </div>
        <div className={s.iconsGrop}>
          {status === "authenticated" ? (
            <button onClick={handleLogout}>
              <LogoutIcon />
            </button>
          ) : (
            <Link to="/login">
              <LoginIcon />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarClient;
