import Nav from './components/Nav';
import Hero from './components/Hero';
import Slider from './components/Slider';

function App() {
  return (
    <div className='bg-rs-black h-full'>
      <div className='container'>
        <Nav />
        <Hero />
      </div>
      <Slider />
    </div>
  );
}

export default App;
