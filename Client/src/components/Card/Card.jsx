/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useNavigate} from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, removeFavorite } from "../../redux/actions";

function Card(props) {

   const navigate = useNavigate()
   const {character, onClose, addFavorite, removeFavorite, favorites} = props
   const { id, name, status, species, gender, origin, image } = character

   const [closeBtn, setCloseBtn] = useState(true)
   const [fav, setFav] = useState(false)

   useEffect(() => {
      if(!onClose){
         setCloseBtn(false)
      }
   }, [])

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setFav(true);
         }
      });
   }, [favorites]);

   function navigateHandler(){
      navigate(`/detail/${id}`)
   }

   function handleFavorite(data){
      if(!fav){
         addFavorite(data)
         setFav(true)
      } else {
         removeFavorite(data)
         setFav(false)
      }
   }

   return (
      <div>
          

         {
            fav ? (
            <button onClick={ ()=> handleFavorite(character.id)}>❤️</button>
            ) : (
            <button onClick={ ()=> handleFavorite(character)}>🤍</button>
            )
         }

         {closeBtn && <button onClick={()=> {onClose(character.id)}}>X</button> }

         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin.name}</h2>
         <img src={image} alt={name} onClick={navigateHandler} /> 
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {

   return{
      addFavorite: (character)=>dispatch( addFavorite(character)),

      removeFavorite: (id)=> dispatch(removeFavorite(id)),
   }

}

const mapStateToProps = (state) => {

   return {
      favorites: state.myFavorites
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card)