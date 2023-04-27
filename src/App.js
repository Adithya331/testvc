import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Room from './Room';

function App() {
  return (
	<BrowserRouter>
	<div>
	  <section>                              
		  <Routes>                                                                        
			 <Route path="/home" element={<Home/>}/>
			 <Route path="/login" element={<Login/>}/>
			 <Route path="/signup" element={<SignUp/>}/>
			 <Route path='/room' element={<Room/>}/>
		  </Routes>                    
	  </section>
	</div>
  </BrowserRouter>
  )
}


export default App;
