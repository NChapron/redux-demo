import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

import classes from "./Auth.module.css";

const Auth = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  if (isLogin) {
    return;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("bien recu");
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
      {isLogin && <p>Commecte</p>}
    </main>
  );
};

export default Auth;
