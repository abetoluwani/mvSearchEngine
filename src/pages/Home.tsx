import MovieCard from "../components/cards/movieCard";
import{ useState } from "react";


function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    const movies = [
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "The Matrix", year: 1999 },
        { id: 3, title: "Interstellar", year: 2014 },
    ] 
    const handleseacrh = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const form = event.target as HTMLFormElement;
        const input = form.querySelector("input") as HTMLInputElement;
        const searchTerm = input.value;
        console.log("Search term:", searchTerm);
 
        const filteredMovies = movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );          
        console.log("Filtered movies:", filteredMovies);
    };
    return (
        <div className="Home">
            <form onSubmit  ={handleseacrh}>
                <input type="text" placeholder="Search for movies ...." className=""  value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) =>  (
                    MovieCard({
                        title: movie.title,
                        description: "A mind-bending thriller",
                        imageUrl: "https://via.placeholder.com/150",
                        releaseDate: movie.year.toString(),
                    })
                ),)}
              </div>

            </div>
             
     );
}
export default Home;