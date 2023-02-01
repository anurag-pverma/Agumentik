
import { useNavigate } from 'react-router-dom';
import './App.css';

import MainRoutes from './Pages/MainRoutes';


function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
        <button onClick={()=>navigate("/signup")}>Singup</button> 
        <br/>
        <button onClick={()=>navigate("/login")}>Login</button>
      <MainRoutes />
    </div>
  );
}

export default App;
