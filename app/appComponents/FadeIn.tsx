import { motion } from 'framer-motion';
import React from 'react'

type props = {
    children: React.ReactNode;
};

const FadeIn = ({children}: props) => {
  return (
    <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{ opacity:  1, y: 0 }}
        viewport={{margin: "100% 0px -300px 0px"}}
        transition={{duration: .8, ease: "easeOut"}}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn;
