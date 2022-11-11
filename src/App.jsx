import { useState, useEffect } from 'react'
import CardMovie from './components/CardMovie'
import './App.css'
import {get} from "./Services"


function App() {
  const [movies, setMovies] = useState([]);


  async function getMovies(){
    
    const movies = await get();
    setMovies(movies.entries);
    console.log(movies);
  }

  useEffect(()=>{
    getMovies()
  })

  return (
    <div className='container'>
      <h4 id="tarjeta">Dreaful Cherry Tomatoes</h4>
      
      <CardMovie movies={movies}></CardMovie>
      <div class="example-2 card">
            <div class="wrapper">
                <div class="header">
                    <div class="date">
                        <span class="day">12</span>
                        <span class="month">Aug</span>
                        <span class="year">2016</span>
            </div>
            <ul class="menu-content">
            <li>
                <a href="#" class="fa fa-bookmark-o"></a>
            </li>
            <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
            <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
            </ul>
        </div>
        <div class="data">
            <div class="content">
            <span class="author">Jane Doe</span>
            <h1 class="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
            <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
            <a href="#" class="button">Read more</a>
            </div>
        </div>
        </div>
    </div>

    </div>
    
  )
}

export default App
