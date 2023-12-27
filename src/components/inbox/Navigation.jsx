import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../redux/features/auth/authSlice";

export default function Navigation() {
    const dispatch = useDispatch();

    const logout = ()=>{
        dispatch(userLoggedOut());
        localStorage.clear();
    }
    return (
        <nav className="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/">
                        <h1 className="font-bold text-3xl text-white">Chat Application</h1>
                    </Link>
                    <ul>
                        <li className="text-white cursor-pointer">
                            <button onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
