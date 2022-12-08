import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';


function App() {
  return (
    <Box className="App" >
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
    </Box>
  );
}

export default App;
