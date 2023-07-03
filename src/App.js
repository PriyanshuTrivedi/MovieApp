import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/Home'
import MovieList from './components/movieList/MovieList';
import MovieDetail from './pages/movieDetail/MovieDetail';
import GenreList from './components/movieList/GenreList';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="content">
            <Routes>
              <Route index element={<Home/>}></Route>
              <Route path='movie/:id' element={<MovieDetail/>}></Route>
              <Route path='movies/:type' element={<MovieList/>}></Route>
              <Route path='movies/Genre/:genre' element={<GenreList />}></Route>
              <Route path='/*' element={<h1>Error Page</h1>}></Route>
            </Routes>
        </div>
        </Router>
    </div>
  );
}

export default App;
