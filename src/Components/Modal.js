import React,{useState} from 'react'
import {Button, Modal} from 'react-bootstrap'

function Modale(props) {
    const [show, setShow] = useState(false);
    const[movie,setMovie] = useState([])
    

    const handleChange = e => {
        const { name, value } = e.target;
        setMovie(prevState => ({
            ...prevState,
            [name]: value
        }));
        };
     
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
       <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display:'flex', flexDirection:'column'}} >
          Title :<input onChange={handleChange} name="title" />
          Description :<input onChange={handleChange} name="description"/>
          TrailerUrl :<input onChange={handleChange} name="trailer"/>
          PosterUrl :<input onChange={handleChange} name="posterUrl"/>
          Rate :<input onChange={handleChange} name="rate"/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {<button onClick={(newMovie)=>props.addMovies(movie)}>save</button>}
            
          </Modal.Footer>
        </Modal>
        
        </div>
    )
}

export default Modale