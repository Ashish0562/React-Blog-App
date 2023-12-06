import Blog from './Components/Blog';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
