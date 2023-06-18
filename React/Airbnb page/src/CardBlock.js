import Card from './Card'
import Data from './data'
import star from './imgs/Star 1.png'
const CardBlock = () => {
    return(
        
      <div className="card-list" id="card-list">
            {
                Data.map(
                (lesson) => 
                    <Card img={lesson.img} rating={lesson.rating} price={lesson.price} title={lesson.title}
                    country={lesson.country} star={star} id= {lesson.id} />
                )
            }
      </div>
        
    );
  }
  
export default CardBlock;  