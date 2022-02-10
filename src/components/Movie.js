import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, summary, genres }) {
    return (
        <li>
            <Link to={`/movie/${id}`}>
                <h2 style={{ padding: 0, margin: 0 }}>{title}</h2>
            </Link>
            <img src={coverImg} />
            <p>{summary}</p>
            <ol>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ol>
        </li>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
