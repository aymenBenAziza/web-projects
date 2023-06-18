const Card = ( {img, country, rating, name, price, star, id} ) => {
    return(
        
        <div id={id} className="card">    
            <img src={img} alt="img"/>
            <div className="card--stats">
                <img src={star} alt="star" id="star"/>
                <span>{rating}</span>
                <span>{country}</span>
            </div>
            <p>Life lessons with {name} </p>
            <p>From  {price}$/person</p>
        </div>
        
    );
}



export default Card;