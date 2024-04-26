import React from 'react'
import './footer.css'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <motion.div className='footer'
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
    >
          <div className="footer-bottom">
          <p>© 2024 Your Website. All rights reserved.</p>
        </div>
    </motion.div>
  )
}

export default Footer