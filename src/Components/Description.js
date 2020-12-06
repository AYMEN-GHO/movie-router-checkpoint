import React from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'

function Description(props) {
    const {description} = props.location.state
    const {trailer} = props.location.state
    return (
       <div>
         <h1>Description</h1>
         <p>{description}</p>
         <ReactPlayer
            url={trailer}
            controls
            width = "800px"
            height = "400px"
        />
       <Link to='/'>Back Home</Link>
        </div>

    )
}

export default Description
