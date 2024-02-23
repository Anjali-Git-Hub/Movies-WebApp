import React from "react";
import { Link ,Outlet,useNavigation} from "react-router-dom";
import styles from "./Root.module.css";
import LoadingSpinner from "../assets/LoadingSpinner.svg";
function Root() {
  const Navigation =useNavigation()
    return (
        <div>
            <nav className={`container ${styles.nav}`}>
                <Link to="/">
                    <h1>Movie Search</h1>
                </Link>
            </nav>

            {Navigation.state === "loading" ? (
                <img
                    src={LoadingSpinner}
                    alt="Loading..."
                    className="loadingSpinner"
                />
            ) : (
                <Outlet />
            )}
        </div>
    );
}

export default Root;
