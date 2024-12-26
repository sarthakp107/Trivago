
import { useState } from 'react';
import './App.css';
import { TripList } from './components/TripList';

function App() {
  const [showTrips , setShowTrips] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShowTrips(false)}>Hide</button>
      <button onClick={() => setShowTrips(true)}>Show</button>
     { showTrips && <TripList/>}
    </div>
  );
}

export default App;
