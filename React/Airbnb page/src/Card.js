const Card = ( {img, country, rating, title, price, star, id} ) => {
    return(
        
        <div id={id} className="card">    
            <img src={img} alt="img" className="bigPic"/>
            <div className="card--stats">
                <img src={star} alt="star" id="star"/>
                <span>{rating}</span>
                <span>{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From {price}$</span> / person</p>
        </div>
        
    );
}



export default Card;