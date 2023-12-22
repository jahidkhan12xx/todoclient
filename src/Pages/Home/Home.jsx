import Banner from "../../components/Banner/Banner";
import OurUser from "../../components/OurUser/OurUser";
import useAuth from "../../hooks/useAuth";



const Home = () => {
    const {user} = useAuth();
    console.log(user);
    
    return (
        <div>
          <Banner></Banner>
          <OurUser></OurUser>
        </div>
    );
};

export default Home;