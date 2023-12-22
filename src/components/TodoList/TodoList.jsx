import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const TodoList = () => {

    const axios = useAxios();
    const {user} = useAuth();

    

    const getTodo = async()=>{
        const res = await axios.get(`/todo?email=${user?.email}`)
        return res;
    }

    const {data,isLoading,refetch} = useQuery({
        queryKey:["todo"],
        queryFn: getTodo
    })
    const handleDelete = (id) =>{
        axios.delete(`/deleteTodo/${id}`)
        .then(res=>{
            console.log(res.data);
            toast.success('Deleted.', {
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
            refetch();
        })
    }

    if(isLoading){
        return <h2>Loading..........</h2>
    }

    console.log(data.data);


  return (
    <div className=" my-16">
      <h2 className=" text-center underline text-4xl font-bold ">Task LIST</h2>
      <div className=" grid grid-cols-3 my-5 mx-5 p-2">
        <div>
        <h2 className=" text-center underline text-2xl font-light ">Active Task</h2>

       {
        data?.data.map(item =>  <div key={item._id} className=" bg-white flex items-center justify-between p-2 my-4 w-[20vw] ">
        <div>
        <h2>Title : {item.title}</h2>
        <p>Description : {item.details}</p>
        <p>Priority : {item.priority}</p>
        <p>Deadline : {item.date}</p>
        </div>
        <div className=" flex flex-col">
            <button onClick={()=>handleDelete(item._id)} className=" text-xl font-bold text-red-800 btn btn-ghost  text-center">X</button>
            <Link to={`/dashboard/edit/${item._id}`}><button className="  font-bold text-red-800 btn btn-ghost  text-center">Edit</button></Link>
        </div>
        </div>)
       }
        </div>
        <div>
        <h2 className=" text-center underline text-2xl font-light ">In Progress</h2>
        </div>
        <div>
        <h2 className=" text-center underline text-2xl font-light ">Completed</h2>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
