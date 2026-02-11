import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className=" bg-gray-900 min-h-screen px-6 md:px-20 pt-24"
    >
      {children}
    </motion.main>
  );
};

export default PageWrapper;
