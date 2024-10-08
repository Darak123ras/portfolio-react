const Home=()=>{
    return (
        <main className="home container" id="home">
            <div className="content">
                <h1>Welcome to my Portfolio</h1>
                <p>Hello, My name is Darakshan Manower Rasheed. I am Aspiring to become a Software Developer.</p>
                <div className="home-btn">
                    <button>Download Resume</button>
                    <button  className="second-btn" >Git</button>
                </div>
                <div className="social">
                    <p>Contact</p>
                    <div className="social-contact">
                        <a href="https://github.com/Darak123ras"><img src="images/github.png" alt="github" /></a>
                        <a href="https://www.linkedin.com/in/darakshan-manower-rasheed-1517981b7/"><img src="images/linkedin.png" alt="linkedin" /></a>
                        
                    </div>
                </div>

            </div>
            <div className="home-image">
                <img src="images/working.png" alt="" />
            </div>
        </main>
    );
};


export default Home;