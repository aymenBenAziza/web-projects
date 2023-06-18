import Data from './Data'
import Place from './Place'

const PlaceListe = () => {
    return(
        <div className='liste'>
            {
                Data.map( place => 
                <Place {...place} /> )
            }
        </div>
    )
}

export default PlaceListe;