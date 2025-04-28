import MovieCard from "../components/cards/movieCard";


function Home() {


    const movies = [
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "The Matrix", year: 1999 },
        { id: 3, title: "Interstellar", year: 2014 },
    ]
    return (
        <div className="Home">
            <div className="movies-grid">
                {movies.map((movie) => (
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