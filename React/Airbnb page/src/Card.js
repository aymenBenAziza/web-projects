const Card = (props) => {
    let textBadgt;
    (props.num === 0) ? textBadgt="sold out" : textBadgt="online";
    return(
        <div id={ props.id } className="card">    
            <div className="sold"><p className="bold">{textBadgt}</p></div>
            <img src={ props.img } alt="img" className="bigPic"/>
            <div className="card--stats">
                <img src={ props.star } alt="star" id="star"/>
                <span>{ props.rating }</span>
                <span>{ props.country }</span>
            </div>
            <p>{ props.title }</p>
            <p><span className="bold">From { props.price }$</span> / person</p>
        </div>
        
    );
}



export default Card;