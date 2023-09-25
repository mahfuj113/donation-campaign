import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="">
            <nav className="md:flex justify-between items-center py-12">
                <img src="../../../../public/Logo.png" alt="" />
                <ul className="md:flex text-center gap-12">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >Donation</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                            }
                        >Statistics</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;