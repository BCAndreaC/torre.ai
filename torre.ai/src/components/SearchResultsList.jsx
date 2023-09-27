import PropTypes from "prop-types";
import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {

    const handleRedirect = ( username) => {
        // window.location.href =(`https://torre.ai/${username}`)
        window.open(`https://torre.ai/${username}`);
    };

    return (
        <div className="results-list">
                {results.slice(0, 10).map((result, id) => {
                        return (
                            <a href={result.url} onClick={() => handleRedirect(result.username)} key={id} className="result-link">
                                <div className="result-name">{result.name}</div>
                            </a>
                        );
                })}
        </div>
    );
};

SearchResultsList.propTypes = {
    results: PropTypes.array.isRequired,
};