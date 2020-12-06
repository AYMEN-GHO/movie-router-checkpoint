import React from "react";
import StarRatingComponent from "react-star-rating-component";

function Filter({ filtredText, filtredRating }) {
 return (
    <div>
      <input onChange={(e) => filtredText(e.target.value)} />
      <StarRatingComponent starCount={7} starColor={`#00FF00`}
      
        onStarClick={(nextValue)=>filtredRating(nextValue)}
    
      />
    </div>
  );
}

export default Filter;