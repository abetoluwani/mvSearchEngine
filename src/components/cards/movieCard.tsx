import "../movieCard.css";
interface MovieCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    releaseDate: string;
}

function onFavClick() {
    console.log("Button clicked");
    alert("Button clicked");
}

function MovieCard(_props: MovieCardProps) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={_props.imageUrl} alt="" />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={onFavClick}>🤍</button>
                </div>
            </div>
            <div className="movie-info">
                <h2>{_props.title}</h2>
                <p>{_props.description}</p>
                <p>Release Date: {_props.releaseDate}</p>

            </div>
        </div>
    );
}
export default MovieCard;