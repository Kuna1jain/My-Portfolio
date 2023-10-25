import "./hero.scss"
const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <div className="textContainer">
                    <h2>KUNAL JAIN</h2>
                    <h1>Web Devloper and Competitive programmer</h1>
                    <div className="buttons">
                        <button>My Projects</button>
                        <button>Contact Me</button>
                    </div>
                    <img src="/scroll.png" alt="" />
                </div>
            </div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    );
};
export default Hero;