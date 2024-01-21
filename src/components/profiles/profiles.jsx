import { useRef } from "react";
import "./profiles.scss";
import { motion, useInView } from "framer-motion";
const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const Profiles = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <motion.div
            className="profiles"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
            >
            <motion.div className="titleContainer"  variants={variants}>
                <div className="title">
                    <img src="/code.jpg" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>My </motion.b></h1>
                </div>
                <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Coding</motion.b> Profiles.
          </h1>
          <button>Resume</button>
        </div>
            </motion.div>
            <motion.div className="listContainer"  variants={variants}>
                <motion.div className="box">
                    <h2>Leetcode</h2>
                    <img src="./leetcode.png" alt="" />
                    <button>Go</button>
                </motion.div>
                <motion.div className="box">
                    <h2>geeksforgeeks</h2>
                    <img src="./gfg.jpg" alt="" />
                    <button>Go</button>
                </motion.div>
                <motion.div className="box">
                    <h2>Codeforces</h2>
                    <img src="./codeforces.png" alt="" />
                    <button>Go</button>
                </motion.div>
            </motion.div>


        </motion.div>
    )
}
export default Profiles;