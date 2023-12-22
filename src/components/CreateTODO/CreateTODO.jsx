import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useForm } from "react-hook-form";

const CreateTODO = () => {
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
    axios.post("/todo", todoData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Task added successfully", {
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

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const title = form.title.value;
  //     const details = form.details.value;
  //     const date = form.date.value;
  //     const priority = form.priority.value;
  //     const userEmail = user.email;

  //     const todoData = {title,details,date,priority,userEmail};

  //     console.log(title,details,date,priority);
  //
  //   };
  return (
    <div className=" my-16">
      <h2 className=" text-center underline text-4xl font-bold ">
        CREATE TODO
      </h2>
      <div className=" flex justify-center items-center mt-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("title", { required: true })}
              name="title"
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
              value="Add Todo"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTODO;
