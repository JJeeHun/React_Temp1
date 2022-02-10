import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        // const response = await fetch(
        //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        // );
        // const json = await response.json();

        //위에랑 같은 문법 await은 then 효과를 주는듯.
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        console.log(json);
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <ul>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            url={movie.url}
                            title={movie.title}
                            coverImg={movie.medium_cover_image}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Home;
