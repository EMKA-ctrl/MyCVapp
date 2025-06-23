import './App.css';
import HomeScreen from '../src/screens/Home';
import WorkExperience from './screens/work_exp';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/studies" element={<WorkExperience />} />
          <Route path="/courses-certificates" element={<WorkExperience />} />
        </Routes>
        
      </Router>
      
    </>
  )
}

export default App
