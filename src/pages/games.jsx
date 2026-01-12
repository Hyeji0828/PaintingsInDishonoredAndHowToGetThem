import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { BASE_URL } from "../constants/config";

const Dishonored2 = () =>{
    return(
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto p-20 text-white">
            <img
                src={`${BASE_URL}/Dishonored_2_logo.png`}
            />
            <div className="w-full max-w-md flex flex-col max-auto">
                <div className="w-full mt-40 border-white border-t border-b hover:text-primary" >
                    <Link to="/Dishonored2/By-mission">
                        <motion.div
                            whileHover={{scale:1.05}}
                            transition={{duration:0.3, ease:"easeOut"}}
                        >
                            <h2 className="font-dishonored text-6xl p-2 text-center">By Mission</h2>
                        </motion.div>
                    </Link>
                </div>

                <div className="w-full mt-30 border-white border-t border-b hover:text-primary" >
                    <Link to="/Dishonored2/By-type">
                        <motion.div
                            whileHover={{scale:1.05}}
                            transition={{duration:0.3, ease:"easeOut"}}
                        >
                            <h2 className="font-dishonored text-6xl p-2 text-center">By Type</h2>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export {Dishonored2};