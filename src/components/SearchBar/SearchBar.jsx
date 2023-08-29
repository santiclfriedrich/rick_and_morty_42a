/* eslint-disable react/prop-types */
import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar(props) {

   const {onSearch} = props

   const [id, setId] = useState("")

   function changeHandler(e){
      e.preventDefault()
      let input = e.target.value

      setId(input)
   }

   return (
      <div>
         <input type='search' value={id} onChange={changeHandler} placeholder="ID..." className={style.inputSearch} />
         <button onClick={()=> onSearch(id)}>Agregar</button>
      </div>
   );
}
