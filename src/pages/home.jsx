import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-dishonored">Collectables In Dishonored</h1>

            <div className= "flex gap-8">
                <Link to="/by-mission" className="">
                    <h2 className="text-2xl font-dishonored">By Missions</h2>
                </Link>

                <Link to="/by-type" className="">
                    <h2 className="text-2xl font-dishonored">By Collectable Types</h2>
                </Link>
            </div>
        </div>
    )
}

export default Home;