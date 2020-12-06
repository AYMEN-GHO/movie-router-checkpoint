import React from 'react'
import {Link} from 'react-router-dom'
//import "node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player'

function Trailer(props) {
    const {trailer} = props.location.state
    return (
        
        <div>
           
    
    <ReactPlayer
    url={trailer}/>
   

    <Link to='/'>back home</Link>
        </div>

    )
}

export default Trailer