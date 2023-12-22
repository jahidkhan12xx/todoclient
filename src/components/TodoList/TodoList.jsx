import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const TodoList = () => {

    const axios = useAxios();
    const {user} = useAuth();

    const getTodo = async()=>{
        const res = await axios.get(`/todo?email=${user?.email}`)
        return res;
    }

    const {data,isLoading} = useQuery({
        queryKey:["todo"],
        queryFn: getTodo
    })

    if(isLoading){
        return <h2>Loading..........</h2>
    }

    console.log(data.data);


  return (
    <div className=" my-16">
      <h2 className=" text-center underline text-4xl font-bold ">Task LIST</h2>
      <div className=" grid grid-cols-3 my-5 mx-5 p-2">
        <div>
        <h2 className=" text-center underline text-2xl font-bold ">Active Task</h2>

       {
        data?.data.map(item =>  <div key={item._id} className=" bg-white flex items-center justify-between p-2 my-4 w-[20vw] ">
        <div>
        <h2>Title : {item.title}</h2>
        <p>Description : {item.details}</p>
        <p>Priority : {item.priority}</p>
        <p>Deadline : {item.date}</p>
        </div>
        <div>
            <h2 className=" text-xl font-bold text-red-800 btn btn-ghost rounded-full text-center">X</h2>
        </div>
        </div>)
       }
        </div>
        <div>
        <h2 className=" text-center underline text-2xl font-bold ">In Progress</h2>
        </div>
        <div>
        <h2 className=" text-center underline text-2xl font-bold ">Completed</h2>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
