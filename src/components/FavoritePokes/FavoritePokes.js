// import React, { Component } from "react";

// class FavoritePokes extends Component {
//   render() {
//     const { pokemons } = this.props;
//     return (
//       <div className="poke">
//         <h2>Here are my favorite Pokemon:</h2>
//         {pokemons.length === 0 ? (
//           <p className="none">There are no pokemons to render</p>
//         ) : (
//           <ul class="pokeList">
//             {pokemons.map((poke, i) => {
//               return (
//                 <li key={`${poke.name}-${i}`}>
//                   <h3 className="pokeName">{poke.name}</h3>
//                   <img src={poke.imgSrc} alt={poke.name} />
//                   {poke.color.name ? (
//                     <p>Color: {poke.color.name}</p>
//                   ) : (
//                     <p className="none">No color available</p>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }

// export default FavoritePokes;
