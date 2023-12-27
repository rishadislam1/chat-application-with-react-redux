import { Outlet } from "react-router-dom";
import useAuthCheck from "../hooks/useAuthCheck";

const Main = () => {
    const authCheck = useAuthCheck();
    return (
        !authCheck?<div>Auth Checking.......</div>:
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;