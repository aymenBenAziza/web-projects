import Card from './Card'
import Data from './data'
import star from './imgs/Star 1.png'
const CardBlock = () => {
    return(
        
      <div className="card-list" id="card-list">
            {
                Data.map( (card) => 
                    <Card { ...card } star={ star } />
                )
            } 
      </div>
        
    );
  }
  
export default CardBlock;  
