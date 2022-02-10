import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ id, title, coverImg, summary, genres }) {
    const maxSize = 235;
    return (
        <div className={styles.movie_box}>
            <div className={styles.img_box}>
                <img src={coverImg} />
            </div>
            <div className={styles.article}>
                <Link to={`/movie/${id}`}>
                    <h3 style={{ padding: 0, margin: 0 }}>{title}</h3>
                </Link>

                <p>
                    {summary.length > maxSize
                        ? `${summary.slice(0, maxSize)}...`
                        : summary}
                </p>
            </div>
        </div>
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
