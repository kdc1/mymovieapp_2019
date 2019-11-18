import React, { Component } from 'react';
import PropTypes from "prop-types";

function Food ({name, picture, rating }){
  return (
  <div>
    <h2>I know {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5

},
{
  id:2,
  name:"Samgyeopsal",
  image:
  "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
  rating: 4.9

}
];
function renderFood(dish){
  console.log(dish);
  return <Food name={dish.name} picture={dish.image} />

}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number

};
class App extends Component {
  render() {
    return (
      <div className="App">
        {console.log(foodILike.map(renderFood))}
        {foodILike.map(dish =>(
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        ))}
      </div>
      
    );
  }
}

export default App;
