import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";



const Login = () => {
    const {login,googleLogin} = useAuth();
    const navigate = useNavigate();

    
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleGoogle = () =>{
    googleLogin().then(()=>{
        toast.success('Login Success.', {
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
  
  const onSubmit = async(data)=>{
   
    const email = data.email;
    const password = data.password;
    console.log(email,password);

    login(email,password)
    .then(res=>{
        console.log(res.user);
        if(res.user){
            toast.success('Login Success.', {
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
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Please provide valid information . You must have to provide a valid email & password . Also make sure provide a professional photo
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              
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
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
               {errors.password?.type === "required" && (
                  <p className=" text-red-600" role="alert">
                    Password is required
                  </p>
                )}
                
              </div>
              <label className="label">
                  <div className="label-text-alt flex gap-3 ">
                    <span>Dont have any account</span>
                    <Link to="/register">
                      <span className=" link link-hover">SignUp</span>
                    </Link>
                  </div>
                </label>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary "
                ></input>
              </div>
              <hr className=" h-1 bg-black" />
              <div className="form-control">
                <button className=" btn btn-sm text-center " onClick={handleGoogle}> Login with <FaGoogle></FaGoogle></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
