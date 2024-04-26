import React from 'react'
import Header from '../Components/Header'
import MainComponent from '../Components/mainComponent'
import { motion } from 'framer-motion';
import Footer from '../Components/footer';

function Home() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 200 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }} >
        <Header />
        <MainComponent />
        {/* <Footer /> */}
    </motion.div>
  )
}

export default Home