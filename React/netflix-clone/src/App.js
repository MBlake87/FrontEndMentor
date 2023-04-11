import './App.css';
import requests from './requests';
import axios from './axios';
import Row from './components/Row';
import Banner from "./components/Banner.js"
import NavBar from './components/NavBar';

function App() {


  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title="Netflix Originals" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
