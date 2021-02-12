
import './App.css';
import ButtonEvents from './components/ButtonEvents';
import CurrencyConverter from './components/CurrencyConverter'


function App() {
  return (
    <div className="App">
      <ButtonEvents />
      <h1>Currency Converter</h1>
      <CurrencyConverter />
    </div>
  );
}

export default App;
