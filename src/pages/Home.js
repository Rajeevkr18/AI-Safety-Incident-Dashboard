import { motion } from "framer-motion";
import './Home.css';

function Home() {
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Welcome to AI Safety Dashboard</h1>
      <p>Track and report AI safety incidents with ease.</p>
    </motion.div>
  );
}

export default Home;
