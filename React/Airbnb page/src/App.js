import Header from "./Header";
import Hero from "./Hero";
import CardBlock from "./CardBlock";
import img from './imgs/Group77.png'
import logo from './imgs/vector.png'




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
