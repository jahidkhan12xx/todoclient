
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
import { FaHistory, FaHome, FaListAlt } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
const Dashboard = () => {
    const {user,logOut} = useAuth();
    const navigate = useNavigate();

    const handleOut = () =>{
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
    return (
        <div className=" flex font-secondary  ">
       
       <div className=" md:w-72 min-h-screen bg-[#2B2A4C] py-32 ">
         <ul className=" menu space-y-7">
         <li>
             <NavLink
               className="text-2xl text-white p-4 font-light"
               to="/dashboard"
             >
               <BiSolidDashboard className=" mr-3"></BiSolidDashboard> Dashboard
             </NavLink>
           </li>
           <li>
             <NavLink
               className="text-2xl text-white p-4 font-light"
               to="/dashboard/createTODO"
             >
               <IoIosCreate className=" mr-3"></IoIosCreate> Create Task
             </NavLink>
           </li>
           <li>
             <NavLink
               className="text-2xl text-white p-4 font-light"
               to="/dashboard/todoList"
             >
               <FaListAlt className=" mr-3"></FaListAlt>Task List
             </NavLink>
           </li>
           <li>
             <NavLink
               className="text-2xl text-white p-4 font-light"
               to="/previousTODO"
             >
               <FaHistory className=" mr-3"></FaHistory> History
             </NavLink>
           </li>
         
         </ul>
         <hr className=' mx-5 my-10'></hr>
         <ul className=' menu space-y-7'>
         <li>
             <NavLink
               className="text-2xl text-white p-4 font-light"
               to="/"
             >
               <FaHome className=" mr-3"></FaHome> Home
             </NavLink>
           </li>
           <li>
             <button onClick={handleOut}
               className="text-2xl text-white p-4 font-light"
               
             >
               <CgLogOut className=" mr-3"></CgLogOut> LogOut
             </button>
           </li>
         </ul>
       </div>
       <div className=" flex-1 bg-[#EEE2DE] ">
         <Outlet></Outlet>
       </div>
     </div>
    );
};

export default Dashboard;