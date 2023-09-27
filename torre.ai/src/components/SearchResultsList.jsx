import PropTypes from "prop-types";
import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {
    return (
        <div className="results-list">
                {results.map((result, id) => {
                        return <div className="result-name" key={id}>{result.name}</div>
                })}
        </div>
    );
};

SearchResultsList.propTypes = {
    results: PropTypes.array.isRequired,
};