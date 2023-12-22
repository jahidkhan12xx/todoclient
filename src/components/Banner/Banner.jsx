import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero h-[80vh] " style={{backgroundImage: 'url(https://i.ibb.co/dr8Wzr0/Screenshot-2023-12-22-074353.png)'}}>
  
  <div className="hero-content text-center text-white">
    <div className="max-w-md absolute bottom-48 left-[29%]">
     
      <Link to="/dashboard"><button className="btn btn-primary">Let's Explore</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;