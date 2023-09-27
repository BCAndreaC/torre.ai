import PropTypes from "prop-types";
import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {

    const handleRedirect = (url) => {
        window.location.href =(url, "https://torre.ai/")
    };

    return (
        <div className="results-list">
                {results.slice(0, 10).map((result, id) => {
                        return (
                            <a href={result.url} onClick={() => handleRedirect(result.url)} key={id} className="result-link">
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