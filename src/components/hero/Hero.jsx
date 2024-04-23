import "./hero.scss"
import {motion} from "framer-motion"


const textVariants = {
    initial:{
        x:-500,
        opacity: 0,
    },
    animate: { // all of the texts appears from left to right
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton:{ // the scroll button image reappears every 2s
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    },
};

const sliderVariants = {
    initial:{
        x: 0,
    },
    animate: { // all of the background texts rotates from left to right
        x: "-300%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30,
        },
    },
};

const Hero = () => {
    return (
        <div className = "hero">

            <div className="wrapper">
                <motion.div className = "textContainer" variants = {textVariants} initial="initial" animate = "animate">
                    <motion.h2 variants = {textVariants}>RAY XIAO</motion.h2>
                    <motion.h1 variants = {textVariants} className="degree">Computer Systems Engineering</motion.h1>
                    <motion.h1 variants = {textVariants} className="uni">University of Auckland</motion.h1>
                    <motion.div variants = {textVariants} className="buttons">
                        <motion.button variants = {textVariants}>Projects</motion.button>
                        <motion.button variants = {textVariants}>Experiences</motion.button>
                    </motion.div>
                </motion.div>
                <motion.img variants = {textVariants} animate = "scrollButton" src="/scroll.png" alt="" />
            </div>

            <motion.div className = "slidingTextContainer" variants = {sliderVariants} initial = "initial" animate = "animate">
                Ray Xiao Ray Xiao Ray Xiao
            </motion.div>

            <div className = "imageContainer">
                <img src = "/rayxiao.png" alt = ""/>
            </div>
        </div>
    )

};

export default Hero;