
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home/Home';

function App() {
  return (
<div>
    {/* <Home></Home> */}
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>

    </Routes>

</div>

  );
}

export default App;
    