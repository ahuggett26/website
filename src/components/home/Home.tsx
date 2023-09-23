import { Outlet } from "react-router-dom";
import styles from "./Home.module.scss";
import Header from "./header/Header";

const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <Header />
      <div className={styles["home-page-contents"]}>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
