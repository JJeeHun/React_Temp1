import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

function Detail() {
    const { id } = useParams();
    useEffect(async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log("asdfd", json);
    }, []);
    return <h1>Detail</h1>;
}

export default Detail;
