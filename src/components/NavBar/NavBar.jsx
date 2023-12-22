import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const NavBar = () => {
    const {user,logOut} = useAuth();
    const navigate = useNavigate();
    console.log(logOut);
    const handleLogOut = () =>{
        logOut().then(()=>{
            toast.success('LogOut Success.', {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                  primary: '#713200',
                  secondary: '#FFFAEE',
                },
              });
            navigate("/")
        }).catch()
    }
  const nav = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-blue-500 btn ml-3 rounded-none btn-sm btn-ghost bg-white"
            : "text-white rounded-none ml-3 btn btn-ghost hover:bg-white hover:text-blue-700 btn-sm"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-blue-500 btn ml-3 rounded-none btn-sm btn-ghost bg-white"
            : "text-white rounded-none ml-3 btn btn-ghost hover:bg-white hover:text-blue-700 btn-sm"
        }
      >
        About Us
      </NavLink>
    </>
  );
  return (
   <div className=" ">
     <div className="navbar md:px-60 
        font-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-red-800 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <h2 className=" md:text-3xl text-xl md:font-semibold text-white">Awesome TODO</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        {
            user ? <div className="dropdown dropdown-end  z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content    rounded-box w-52">
              
              <li className=" hover:bg-red-800 hover:text-white rounded-box  "><a>{user?.displayName}</a></li>
              <li className=" hover:bg-red-800 hover:text-white rounded-box  "><button onClick={handleLogOut}>Logout</button></li>
            </ul>
          </div> : <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-blue-500 btn ml-3 rounded-none btn-sm btn-ghost bg-white"
                : "text-white rounded-none ml-3 btn btn-ghost hover:bg-white hover:text-blue-700 btn-sm"
            }
          >
            Login
          </NavLink>
          
          

        }
      </div>
    </div>
   </div>
  );
};

export default NavBar;
