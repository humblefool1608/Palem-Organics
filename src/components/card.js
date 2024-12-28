import React, {useState} from 'react';
import { motion } from 'framer-motion';
import '../styles/card.css';

const Card = ({header,desc1 ,desc2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='wrapper2'> 
    <motion.div
      className="expandable-card"
      initial={{ scale: 1.0, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: 100 , height:50, width:50}}
      whileHover={{ 
        scale: 1, 
        height:100,
        width:200,
        boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.15)', 
        borderRadius: 12, 
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      transition={{ 
        duration: 0.2, 
        ease: 'easeInOut', 
        borderRadius: { duration: 0.2 } 
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div className="card-header">
        {header}
      </motion.div>
      <motion.div
        className={isHovered ? 'card-content show-content' : 'card-content'}
        initial={{ opacity: 0, maxHeight: 0 }}
        animate={isHovered ? 
          { 
            opacity: 1, 
            maxHeight: '50%', 
            transition: { 
              duration: 0.1, 
              ease: 'easeInOut', 
            } 
          } 
          : 
          { 
            opacity: 0, 
            maxHeight: 0, 
            transition: { 
              duration: 0.1, 
              ease: 'easeInOut' 
            } 
          }}
      >
        <p>
        {desc1}  
        </p>
        <p>
        {desc2}    
        </p>
      </motion.div>
      <motion.div
        className="blur-effect"
        initial={{ opacity: 0, backdropFilter: 'none' }}
        animate={isHovered ? 
          { 
            opacity: 0.5, 
            backdropFilter: 'blur(20px)', 
            transition: { 
              duration: 0.4, 
              ease: 'easeInOut',
            } 
          } 
          : 
          { 
            opacity: 0, 
            backdropFilter: 'none', 
            transition: { 
              duration: 0.3, 
              ease: 'easeInOut' 
            } 
          }}
      />
    </motion.div>
    </div>
  );
};

export default Card;



