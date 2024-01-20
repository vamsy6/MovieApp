import { useState, useEffect} from 'react'
import SearchIcon from './assets/search.svg'
import MovieCard from './MovieCard'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeProvider } from "@/components/theme-provider"
import NoMovies from './NoMovies'



const API_URL = 'http://www.omdbapi.com?apikey=395e919e'
function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    setIsLoading(true);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    setIsLoading(false);
  };


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="app grid place-items-center">
    
      <h1 className='scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-5 mb-3'>Search Movies</h1>
      <div className="search flex">
        <div className="absolute top-0 right-0 m-4">
  
        </div>
      
  <Input
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search for movies"
    style={{ marginRight: '10px' }} 
  />
  
  <Button
    src={SearchIcon}
    alt="search"
    onClick={() => searchMovies(searchTerm)}
  >
    Search
  </Button>
</div>


      {movies?.length > 0 ? (
        <div className="container grid gap-4 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <NoMovies />
        </div>
      )}
    </div>
    </ThemeProvider>
  );
};

export default App
