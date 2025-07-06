import React from 'react'
import { Link2 } from 'lucide-react'
import { motion } from 'framer-motion'

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-shiksha-bg via-[#D4F5E5] to-shiksha-bg">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-card p-6 text-center"
      >
        <motion.div 
          animate={{ 
            y: [-10, 0, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2 
          }}
        >
          <Link2 
            className="mx-auto mb-4 text-shiksha-green" 
            size={48} 
            strokeWidth={1.5} 
          />
        </motion.div>
        
        <h2 className="text-lg font-medium text-shiksha-text-dark mb-2">
          Minting your verifiable skill…
        </h2>
        <p className="text-sm text-shiksha-text-light">
          Securely writing to the blockchain...
        </p>
      </motion.div>
    </div>
  )
}

export default LoadingScreen