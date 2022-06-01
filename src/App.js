import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfil from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <>
      <Header />
      {!isLogin && <Auth />}
      {isLogin && <UserProfil />}
      <Counter />
    </>
  );
}

export default App;
