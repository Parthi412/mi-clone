import Home from './nav/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Store from './nav/Store';
import Login from './nav/Login';
import Mobile from './nav/Mobile';
import Tablte from "./nav/Tablet's";
import Tv from './nav/Tv';
import Show from './nav/Show';
import Admi from './nav/Admi';
import Formcrete from './Formcrete';
import Update from './Update';
import GetData from './get';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/user' element={<Login></Login>}/>
        <Route path='/mobile' element={<Mobile></Mobile>}/>
        <Route path='/tablets' element={<Tablte></Tablte>}/>
        <Route path='/Tv' element={<Tv></Tv>}/>
        <Route path='/car' element={<Show></Show>} />
        <Route path='/ad' element={<Admi></Admi>} />
        <Route path='/cre' element={<Formcrete></Formcrete>} />
        <Route path='/update' element={<Update></Update>} />
        <Route path='/GET' element={<GetData></GetData>}/>
        <Route path='/update/:id' element={<Update></Update>} loader={({params})=>fetch(`http://localhost:4000/update/${params.id}`)}/>

      </Routes>
      {/* <Footer></Footer> */}
      
    </BrowserRouter>
    
    </div>
  );
}

export default App;
