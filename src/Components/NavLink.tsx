import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, label }: { to: string; label: string }) => {
    const location = useLocation();
    return (
        <Link
            to={to}
            className={`${location.pathname === to ? "bg-gray-900 text-white" : "text-gray-300 hover:text-white hover:bg-gray-800"} rounded-md px-3 py-2 text-sm font-medium`}
        >
            {label}
        </Link>
    );
};

export default NavLink;
