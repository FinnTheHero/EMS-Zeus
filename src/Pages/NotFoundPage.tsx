import NavLink from "../Components/NavLink";

const NotFoundPage = () => {
    return (
        <div className="w-full text-center flex flex-col justify-center items-center">
            <div className="text-3xl max-w-5xl flex flex-col justify-center">
                <h2>Page Not Found!</h2>
                <NavLink to="/" label="Back To Home" />
            </div>
        </div>
    );
};

export default NotFoundPage;
