const Navigation=()=>{
    return (
        <nav className="container">
            <div className="logo">
                <img src="images/D.png" alt="logo" />
            </div>
            <ul>
                <li href="#"><a href="">Home</a></li>
                <li href="#"><a href="">About</a></li>
                <li href="#"><a href="">Skills</a></li>
                <li href="#"><a href="">Contact</a></li>
            </ul>
            <button >Download</button>
        </nav>
    );
};

export default Navigation;