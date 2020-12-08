const Home = () => {

    return (
        <div className="home">
            <div className="home-cards">
                <div className="card left">
                    <div className="card-content">
                        <h3>What This Is:</h3>
                        <ul>
                            <li>A convenient place to randomize and keep track of some basic set pieces for your games</li>
                            <li>Deeply, <b>deeply</b> self-indulgent of the developer</li>
                            <li>Still growing</li>
                        </ul>
                    </div>
                </div>

                <div className="card right">
                    <div className="card-content">
                        <h3>What this is not</h3>
                        <ul>
                            <li>A way to learn how to play Blades in the Dark without buying the book</li>
                            <li>Seriously, I'm not doing it, <a href="http://bladesinthedark.com/">go buy it</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;