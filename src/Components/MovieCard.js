import React from "react";
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieCard({ title, description, trailer, posterUrl, rate }) {
  return (
    <div className="corp ">
      <Card style={{ width: "360px", height:"auto" ,backgroundColor:"white",margin:"15px"}}>
        <Card.Img variant="top" src={posterUrl} style={{ width: "358px", height:"auto" }} />
        <Card.Body >
          <Card.Title style={{ color:"red" ,fontSize:"25px" }}>{title}</Card.Title>
          <Link to={{pathname:`/description/${title}`, state:{description, trailer} }}>Read more...</Link>
          <StarRatingComponent starCount={7} value={rate} starColor={`#00FF00`}/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;