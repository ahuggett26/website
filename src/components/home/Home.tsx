import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import styles from "./Home.module.scss";

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
