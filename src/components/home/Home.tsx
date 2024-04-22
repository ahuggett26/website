import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import styles from "./Home.module.scss";

/**
 * Primary home page containing the header and contents.
 *
 * Not every page might want to share this view's layout.
 * If it does, it should have navigation links so it is accessible throughout the 'home' view.
 *
 * @returns JSX element of component
 */
const Home = () => {
  return (
    <div className={styles["home-container"]}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
