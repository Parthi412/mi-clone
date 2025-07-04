import Home from './nav/Home';
import Nav from './nav/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Store from './nav/Store';
import Footer from './nav/Footer';
import Login from './nav/Login';
import Mobile from './nav/Mobile';
import Tablte from "./nav/Tablet's";
import Tv from './nav/Tv';
import Show from './nav/Show';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/user' element={<Login></Login>}/>
        <Route path='/mobile' element={<Mobile></Mobile>}></Route>
        <Route path='/tablets' element={<Tablte></Tablte>}/>
        <Route path='/Tv' element={<Tv></Tv>}/>
        <Route path='/car' element={<Show></Show>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
