import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col space-y-5 justify-center items-center">
            <h1 className="text-5xl">404 Not Found</h1>
            <div>
                <Link to="/"><button className="btn btn-warning">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;