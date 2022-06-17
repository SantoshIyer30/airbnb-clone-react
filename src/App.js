import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import displaypic1 from "./images/image 12.png";
import displaypic2 from "./images/wedding-photography 1.png";
import displaypic3 from "./images/mountain-bike 1.png";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='cards'>
        <Card
          img={displaypic1}
          rating= "5.0"
          comment="(6)"
          country=" • USA"
          cname="Life lessons with Katie Zaferes"
          rate="From $136"
        />
        <Card
          img={displaypic2}
          rating= "5.0"
          comment="(30)"
          country=" • USA"
          cname="Learn wedding photography"
          rate="From $125"
        />
        <Card
          img={displaypic3}
          rating= "4.8"
          comment="(2)"
          country=" • USA"
          cname="Group Mountain Biking"
          rate="From $50"
        />
      </div>
    </div>
  );
}

export default App;
