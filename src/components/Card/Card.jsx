/* eslint-disable react/prop-types */
import { useNavigate} from "react-router-dom";

export default function Card(props) {

   const navigate = useNavigate()
   const {character, onClose} = props
   const { id, name, status, species, gender, origin, image } = character

   function navigateHandler(){
      navigate(`/detail/${id}`)
   }

   return (
      <div>
          <button onClick={()=> {onClose(character.id)}}>X</button>

         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin.name}</h2>
         <img src={image} alt={name} onClick={navigateHandler} /> 
      </div>
   );
}
