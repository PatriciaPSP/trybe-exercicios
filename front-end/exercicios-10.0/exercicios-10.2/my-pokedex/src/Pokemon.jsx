import React from "react"; 
import propTypes from 'prop-types';

class Pokemon extends React.Component{
render(){
  const { name, type, value, measurementUnit, image} = this.props;
  return(
    <>
      <p>{name}</p>
      <p>{type}</p>
      <p>{value}</p>
      <p>{measurementUnit}</p>
      <p>{image}</p>
    </>
  );
}

}
Pokemon.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
  measurementUnit: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};

export default Pokemon;