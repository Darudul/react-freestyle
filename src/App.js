import './App.css';
import ClockList from './components/ClockList';

function App() {
  const quantities = [1, 2, 3]
  return (
    <div className="App">
      <ClockList quantities={quantities} />
    </div>
  );
}

export default App;
