import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [Movielist, setMovielist] = useState([
    { id: 1, title: "Tesla", description: "A freewheeling take on visionary inventor Nikola Tesla, his interactions with Thomas Edison and J.P. Morgan's daughter Anne, and his breakthroughs in transmitting electrical power and light.", posterURL: "https://m.media-amazon.com/images/M/MV5BYzg0MjQ0ODUtYTgyNC00Y2Y5LWE5NDctODY3ZTFkYmZkNGFiXkEyXkFqcGdeQXVyMTE1MzI2NzIz._V1_SX300.jpg", trailer: 'https://www.youtube.com/embed/e4U-23TOKms', rate: 2.5 },
    { id: 2, title: "Avengers: Endgame", description: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", posterURL: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg", trailer: "https://www.youtube.com/embed/TcMBFSGVi1c", rate: 4 },
    { id: 3, title: "Men in Black: International", description: "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest threat to date: a mole in the Men in Black organization.", posterURL: "https://m.media-amazon.com/images/M/MV5BMDZkODI2ZGItYTY5Yi00MTA4LWExY2ItM2ZmNjczYjM0NDg1XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg", trailer: "https://www.youtube.com/embed/BV-WEb2oxLk", rate: 2.5 },
    { id: 4, title: "I Am Mother", description: "A teenage girl is raised underground by a kindly robot 'Mother' -- designed to repopulate the earth following the extinction of humankind. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.", posterURL: "https://m.media-amazon.com/images/M/MV5BMTkxMTczNTA4Nl5BMl5BanBnXkFtZTgwNDAyMzgwODM@._V1_SX300.jpg", trailer: "https://www.youtube.com/embed/N5BKctcZxrM", rate: 3 },
    { id: 5, title: "Captive State", description: "Set in a Chicago neighborhood nearly a decade after an occupation by an extra-terrestrial force, Captive State explores the lives on both sides of the conflict - the collaborators and dissidents.", posterURL: "https://m.media-amazon.com/images/M/MV5BMTgyNjU0NTAxOV5BMl5BanBnXkFtZTgwNTc4MDIzNjM@._V1_SX300.jpg", trailer: "https://www.youtube.com/embed/i68xCzI406A", rate: 3.5 },
    { id: 6, title: "Interstellar", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", posterURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg", trailer: "https://www.youtube.com/embed/zSWdZVtXT7E", rate: 4 }
  ])

  const [Title, setTitle] = useState("")
  const chooseByTitle = (word) => {
    setTitle(word)
  }

  const [Rate, setRate] = useState("0")
  const chooseByRate = (rating) => {
    setRate("" + rating)
  }

  const addMovie = (title, description, posterURL, rate) => {
    setMovielist([...Movielist, { title, description, posterURL, rate }])
  }

  const Trailer = ({ match }) => {
    const trailer = Movielist.find(({ title }) => title === match.params.Ntitle)
    return (
      <div>
        <h1 style={{fontFamily: "Georgia, serif" , fontSize:40 , fontWeight:"bolder" , margin: 30 , color: "#212F3C" , textAlign:"center" , textDecoration:"underline"}}>{trailer.title}</h1>
        <span style={{display : "flex" , justifyContent : "center"}}><iframe width="853" height="480" src={trailer.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></span>
        <p style={{fontFamily: "sans-serif" , fontSize:20 , margin: "30px  70px" , color: "black" , textAlign:"center"}}>{trailer.description}</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Header add={addMovie} searchTitle={chooseByTitle} searchRate={chooseByRate} />
        <Switch>
          <Route exact path='/Checkpoint-Route' render={() => <Main add={addMovie} Movies={Movielist} Title={Title} Rate={Rate} />} />
          <Route path='/trailer/:Ntitle' component={Trailer} /> 
        </Switch>
      </div>
    </Router>

  );
}

export default App;
