import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const img_key = "6d94af00efbecd7f306edd9f6d4e215c";
  const img_api = `https://api.imgbb.com/1/upload?expiration=0&key=${img_key}`;


const Register = () => {
    const {register:createUser,updateUser} = useAuth();
    const navigate = useNavigate();

    const axiosPublic = useAxios();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  
  const onSubmit = async(data)=>{
    const imgFile = { image: data.photo[0] };
    const res = await axiosPublic.post(img_api, imgFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imgURL = res.data.data.display_url;
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(name,email,password,imgURL);

    createUser(email,password)
    .then(res=>{
        console.log(res.user);
        if(res.user){
            updateUser(name,imgURL).then(()=>{
                toast.success('Registration Success', {
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
                navigate("/login")
            }).catch();

        }
    })
    .catch(err=>{
        console.log(err.code);
        toast.error(err.code, {
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
    })
    

  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
            <p className="py-6">
              Please provide valid information . You must have to provide a valid email & password . Also make sure provide a professional photo
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Name is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
               {errors.email?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password",{
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~\\-]).*$/,
                  }, { required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
               {errors.password?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className=" text-red-600" role="alert">
                    Password must be six characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className=" text-red-600" role="alert">
                    Password must contain a Capital,Small & Special Character{" "}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="file"
                  placeholder="photo"
                  className=" w-full "
                />
                {errors.photo?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Photo is required
                  </p>
                )}
              </div>
              <label className="label">
                  <div className="label-text-alt flex gap-3 ">
                    <span>Already have any account</span>
                    <Link to="/login">
                      <span className=" link link-hover">SignIn</span>
                    </Link>
                  </div>
                </label>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary "
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
