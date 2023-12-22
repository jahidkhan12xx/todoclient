
import { NavLink, Outlet } from 'react-router-dom';
import { BiSolidDashboard } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
import { FaHistory, FaHome, FaListAlt } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
const Dashboard = () => {
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
             <NavLink
               className="text-2xl text-white p-4 font-light"
               to="/logOut"
             >
               <CgLogOut className=" mr-3"></CgLogOut> LogOut
             </NavLink>
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