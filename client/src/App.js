
import {useState} from 'react'
import Login from'./components/account/account/login'
import DataProvider from './context/DataProvider';
import Home from './components/account/home/Home';
import {BrowserRouter,Routes,Route,Outlet,Navigate} from 'react-router-dom'
import Header from './components/account/header/Header'
import CreatePost from './components/account/create/CreatePost';
import Update from './components/account/create/Update';
import DetailView from './components/account/details/DetailsView';
import About from './components/account/about/about';
import Contact from './components/account/contact/Contact';
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ? 
    <>
      <Header/>
      <Outlet />
    </> : <Navigate replace to='/login' />
};
function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    
      <DataProvider>
      <BrowserRouter>
      
        <div style ={{marginTop:60}}>
          
          <Routes>
              < Route path ='/login'element={<Login isUserAuthenticated={isUserAuthenticated}/>} />
              <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
              </Route>
              <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
              </Route>
              <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element={<DetailView />} />
              </Route>
              <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/update/:id' element={<Update/>} />
              </Route>
              <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/about' element={<About />}/>
              </Route>
              <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/contact' element={<Contact/>} />
              </Route>
             
     </Routes>
     </div>
     </BrowserRouter>
     </DataProvider> 
      
    
  );
}

export default App;
