import { useLoaderData, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";


const EditTask = () => {
    const {id} = useParams();
    const specificData = useLoaderData();
    console.log(id,specificData);

    
    const axios = useAxios();
  const { user } = useAuth();

  
  

  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const title = data.title;
    const details = data.details;
    const date = data.date;
    const priority = data.priority;
    const userEmail = user.email;
    const todoData = { title, details, date, priority, userEmail };
    axios.patch(`/updateTodo/${id}`, todoData).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount>0) {
        toast.success("Task Modified successfully", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      }
    });
  };
 
    return (
        <div className=" my-16">
            <h2 className=" text-center underline text-4xl font-bold">Edit section </h2>
            <div className=" flex justify-center items-center mt-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("title", { required: true })}
              name="title"
              defaultValue={specificData?.title}
              type="text"
              placeholder="Title"
              className="input input-bordered input-warning w-[50vw]"
            />
            {errors.title?.type === "required" && (
              <p className=" text-red-600" role="alert">
                Title is required
              </p>
            )}
          </div>
          <br />
          <br />
          <textarea
            {...register("details", { required: true })}
            defaultValue={specificData?.details}
            name="details"
            className="textarea textarea-warning w-[50vw]"
            placeholder="Description"
          ></textarea>
          {errors.details?.type === "required" && (
            <p className=" text-red-600" role="alert">
              Description is required
            </p>
          )}
          <br />
          <br />
          <div>
            <select
              {...register("priority", { required: true })}
              name="priority"
              defaultValue={specificData?.priority}
              className="select select-warning w-[50vw]"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            {errors.priority?.type === "required" && (
              <p className=" text-red-600" role="alert">
                Priority is required
              </p>
            )}
          </div>
          <br />
          <br />
          <div>
            <input
              {...register("date", { required: true })}
              name="date"
              type="date"
              defaultValue={specificData?.date}
              placeholder="Select Deadline"
              className="input input-bordered input-warning w-[50vw]"
            />
            {errors.date?.type === "required" && (
              <p className=" text-red-600" role="alert">
                Deadline is required
              </p>
            )}
          </div>
          <br />
          <br />
          <div>
            <input
              className=" btn btn-sm hover:bg-white hover:text-red-800 bg-red-800 text-white"
              type="submit"
              value="Save"
            />
          </div>
        </form>
      </div>
        </div>
    );
};

export default EditTask;