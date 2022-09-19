import './App.css';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import Logged from './screens/Userhome';
import UserApplication from './screens/UserApplication' 
import AdminSideBar from './components/AdminBar/AdminSideBar';
import SlotPage from './screens/AdminPage/SlotPage';
import AdminLogin from './screens/AdminPage/AdminLogin';


const App=()=> (
<BrowserRouter>
{/* <Header/> */}

<main>
  <Routes>
  <Route path='/' element={<LandingPage></LandingPage>} />
  <Route path='/login' element={<Login></Login>} />
  <Route path='/signup' element={<Signup></Signup>} />
  <Route path='/logged' element={<Logged></Logged>} />
  <Route path='/booking' element={<UserApplication></UserApplication>} />

  </Routes>

  <Routes>
  <Route path='/adminlogin' element={<AdminLogin/>}></Route>
  <Route path='/admin' element={<AdminSideBar/>}></Route>
  <Route path='/slot' element={<SlotPage/>}></Route>
  </Routes>

</main>

{/* <Footer/> */}
</BrowserRouter>
)
  

export default App;
