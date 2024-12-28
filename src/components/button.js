import '../styles/button.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import {motion} from "framer-motion";

const Button = ({description}) => {
    const [isHover, setIsHover] = useState(false);

    return <div className='wrapper'>
        <div className='buttonContainer' onMouseEnter={(e) => setIsHover(true)}
            onMouseLeave={(e) => setIsHover(false)}>
            <motion.div className='circle' 
            animate={{
                scale: isHover ? 80 : 1,
                backgroundColor: isHover ? "#0a00c1" : "#000000",
            }}
            transition={{
                ease:"easeIn",
                duration:0.2,
            }}></motion.div>
            <motion.div className='title' animate={{
                x: isHover ? -8 : 8,
                color: isHover ? "#FFFFFF" : "#000000",
            }}>
                <p className='service'>{description}</p>
            </motion.div>
            <motion.div className='iconContainer' animate={{
                x: isHover ? 0 : 24,
            }}>
            <ArrowRightIcon className="icon"/>
            </motion.div>
        </div>
    </div>
};

export default Button;