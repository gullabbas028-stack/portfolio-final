import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => (
  <motion.div
    className="loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="loader__inner">
      <div className="loader__logo">GA<span>.</span></div>
      <div className="loader__bar">
        <motion.div
          className="loader__fill"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </div>
    </div>
  </motion.div>
);

export default Loader;
