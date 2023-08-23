import { useState } from "react";

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
         <input type='search' value={id} onChange={changeHandler} />
         <button onClick={()=> onSearch(id)}>Agregar</button>
      </div>
   );
}
