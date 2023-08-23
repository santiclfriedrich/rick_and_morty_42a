/* eslint-disable no-unused-vars */
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([])

   function searchHandler(id){
 
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      
   }

   function closeHandler(id){
      let deleted = characters.filter(character => character.id !== +id)

      setCharacters(deleted)
   }

   return (
      <div className='App'>
         <Nav onSearch={searchHandler} />
         <Cards characters={characters} onClose={closeHandler}/>
         
      </div>
   );
}

export default App;
