const Place = (props) => {
    return(
    <div className="content" key={props.key}>
            <img  alt="img place" src={props.img} />
            <div className='about'>
                <div className='place'>
                    <p><i class="fa fa-plane-arrival"></i> {props.country}</p>
                    <a href={props.url}>View on Google Maps</a>
                </div>
                <h3 className='bold'>{props.place}</h3>
                <p className='bold'>{props.date}</p>
                <p>{props.about}</p>
            </div>
        </div>
    );
}

export default Place;