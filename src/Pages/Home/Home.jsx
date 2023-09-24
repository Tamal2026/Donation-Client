import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Donations from "../Donate/Donations";



const Home = () => {
    const donations = useLoaderData();
    console.log(donations);
    return (
        <div>
          
            <Banner></Banner>

            <Donations donations = {donations}></Donations>
        </div>
    );
};

export default Home;