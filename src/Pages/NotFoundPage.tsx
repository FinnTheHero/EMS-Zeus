import NavLink from "../Components/NavLink";

const NotFoundPage = () => {
    return (
        <div className="w-full h-full text-center flex flex-col justify-center bg-red-700">
            <h2>Page Not Found!</h2>
            <NavLink to="/" label="Back To Home" />
        </div>
    );
};

export default NotFoundPage;
