import { motion } from 'framer-motion';
import React from 'react'
]
type props = {
    children: React.ReactNode;
};

const FadeIn = ({children}: props) => {
  return (
    <motion.div>
      {children}
    </motion.div>
  )
}

export default FadeIn;
