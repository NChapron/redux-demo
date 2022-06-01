import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import classes from "./Header.module.css";

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  console.log(isLogin);

  if (!isLogin) {
    return (
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        <p>Must be login</p>
      </header>
    );
  }

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
