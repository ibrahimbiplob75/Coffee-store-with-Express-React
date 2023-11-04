import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";


const Home = () => {
    const LoadedData=useLoaderData();
    return (
        <div className="grid md:grid-cols-2 gap-10 m-20">
            {
                LoadedData.map(Data=> <CoffeeCard key={Data._id} Data={Data}></CoffeeCard>)
            }
        </div>
    );
};

export default Home;