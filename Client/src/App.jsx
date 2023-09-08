/* eslint-disable no-unused-vars */
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Detail from './views/Detail/Detail';
import About from './views/About/About';
import Error from './views/Error/Error';
import LandingPage from './views/landingPage/landingPage';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFavorite } from './redux/actions';
import axios from 'axios';
import Favorites from './views/Favorites/Favorites';


function App() {

   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false);

   const navigate = useNavigate();
   const location = useLocation()
   const dispatch = useDispatch()

   const isHomePage = location.pathname === '/'

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   
   useEffect(() => {
      !access && navigate('/');
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access]);

   function searchHandler(id){
 
         axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      
   }

   function closeHandler(id){
      let deleted = characters.filter(character => character.id !== +id)

      dispatch(removeFavorite(id))

      setCharacters(deleted)
   }

   return (
      <div className='App'>
         { !isHomePage && <Nav onSearch={searchHandler} />}


         <Routes>
            <Route path='/' element={ <LandingPage login={login} /> } />
            <Route path='/home' element={<Cards characters={characters} onClose={closeHandler}/>} />
            <Route path='/detail/:id' element={ <Detail /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/favorites' element={ <Favorites /> } />
            <Route path='*' element={ <Error /> } />
         </Routes>


         
         
      </div>
   );
}

export default App;
