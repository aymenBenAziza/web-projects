import Header from "./Header";
import logo from './vector.png'
import Hero from "./Hero";
import img from './Group77.png'
import limg1 from './image 12.png'
import limg2 from './wedding-photography 1.png'
import limg3 from './mountain-bike 1.png'
import Lesson from "./Card";
import star from './Star 1.png'
import Card from "./Card";

const lessonData = [
  {img:limg1, rating:'5', country:'usa', name:"katie", price:"135", id:"1"},
  {img:limg2, rating:'3', country:'TN', name:"may", price:"500", id:"2"},
  {img:limg3, rating:'4.8', country:'Moroco', name:"aymen", price:"2000", id:"3"},
]

const CardBlock = () => {
  return(
      
    <div className="lessons">
        {
          lessonData.map(
            (lesson) => 
              <Card img={lesson.img} rating={lesson.rating} price={lesson.price} name={lesson.name}
               country={lesson.country} star={star} id= {lesson.id} />
          )
        }
    </div>
      
  );
}





function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Hero img={img}/>
      <CardBlock />
    </div>
  );
}

export default App;
