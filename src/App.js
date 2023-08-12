import './App.css';
import About from './components/About';
import Home from './components/Home';

function App() {
  const heading = "React Apps";
  const uuu = "yyyyyyyyyy";
  return (
    <div className="App">
      <Home abcd = {heading} ttt = {uuu} />
      <About/>
    </div>
  );
}

export default App;
