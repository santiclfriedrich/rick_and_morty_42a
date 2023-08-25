/* eslint-disable react/prop-types */
import Card from '../Card/Card.jsx';

export default function Cards(props) {
   
   const { characters, onClose } = props

   return (<div>
      { characters?.map((character) => (
         <Card key={character.id} character={character} onClose={onClose} />
      )) }
   </div>);
}
