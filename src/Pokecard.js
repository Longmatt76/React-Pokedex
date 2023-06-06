import './Pokecard.css';

const Pokecard = (props) => {
  return (
    <div className="PokeCard">
      <h4 className="PokeCard-header">{props.name}</h4>
      <img className='PokeCard-image'
        src={
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt=''></img>
      <h5 className='Pokecard-data'>Type: {props.type}</h5>
      <h5 className='Pokecard-data'>EXP: {props.exp}</h5>
    </div>
  );
};

export default Pokecard;