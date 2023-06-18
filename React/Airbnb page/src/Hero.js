const Hero = ( { img } ) => {
    return(
        <section className="hero">
            <div>
                <img src={img} alt="img"/>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    );
}

export default Hero;