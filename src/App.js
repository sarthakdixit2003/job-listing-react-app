import './App.css';
import data from './data.json'
import { useState } from 'react';
import Header from './components/Header';
import Jobs from './components/Jobs'
import Logo from './components/Logo';


function App() {
  const [jobs, setJobs] = useState(data)

  return (
    <div className="container">
      <Header />
      <Jobs jobs = {jobs} logo = {Logo}/>
    </div>
  );
}

export default App;
